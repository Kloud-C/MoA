import { WORLD_CUPS } from "../_shared/worldcup-config.js";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json({ error: "origin_not_allowed" }, 403);
  if (!env.MOLGGA_DB) return json({ error: "ranking_not_configured" }, 503);
  if (Number(request.headers.get("content-length") || 0) > 2048) return json({ error: "request_too_large" }, 413);

  let data;
  try { data = await request.json(); }
  catch { return json({ error: "invalid_json" }, 400); }

  const { gameId, itemId, bracketSize, voteId } = data || {};
  const game = WORLD_CUPS[gameId];
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
