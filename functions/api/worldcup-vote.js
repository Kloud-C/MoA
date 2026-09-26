import { WORLD_CUPS } from "../_shared/worldcup-config.js";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});
const MAX_BODY_BYTES = 2048;

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return json({ error: "origin_not_allowed" }, 403);
  if (!env.MOLGGA_DB) return json({ error: "ranking_not_configured" }, 503);
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) return json({ error: "request_too_large" }, 413);

  let data;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ error: "invalid_json" }, 400);
    const chunks = [];
    let byteLength = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > MAX_BODY_BYTES) {
        await reader.cancel();
        return json({ error: "request_too_large" }, 413);
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    data = JSON.parse(new TextDecoder().decode(bytes));
  }
  catch { return json({ error: "invalid_json" }, 400); }

  const { gameId, itemId, bracketSize, voteId } = data || {};
  const game = Object.hasOwn(WORLD_CUPS, gameId) ? WORLD_CUPS[gameId] : null;
  if (!game || !game.items.includes(itemId) || !game.brackets.includes(Number(bracketSize))) {
    return json({ error: "invalid_vote" }, 400);
  }
  if (typeof voteId !== "string" || !/^[a-zA-Z0-9-]{12,64}$/.test(voteId)) {
    return json({ error: "invalid_vote_id" }, 400);
  }

  try {
    const result = await env.MOLGGA_DB.prepare(
      "INSERT OR IGNORE INTO worldcup_votes (vote_id, game_id, item_id, bracket_size) VALUES (?, ?, ?, ?)"
    ).bind(voteId, gameId, itemId, Number(bracketSize)).run();
    return json({ accepted: result.meta?.changes === 1 });
  } catch {
    return json({ error: "vote_unavailable" }, 503);
  }
}
