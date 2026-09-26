import { WORLD_CUPS } from "../_shared/worldcup-config.js";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

export async function onRequestGet({ request, env }) {
  const gameId = new URL(request.url).searchParams.get("gameId");
  if (!Object.hasOwn(WORLD_CUPS, gameId)) return json({ error: "unknown_worldcup" }, 400);
  if (!env.MOLGGA_DB) return json({ error: "ranking_not_configured" }, 503);

  try {
    const result = await env.MOLGGA_DB.prepare(
      "SELECT item_id AS itemId, COUNT(*) AS wins FROM worldcup_votes WHERE game_id = ? GROUP BY item_id ORDER BY wins DESC, item_id ASC LIMIT 10"
    ).bind(gameId).all();
    return json({ items: result.results || [] });
  } catch {
    return json({ error: "ranking_unavailable" }, 503);
  }
}
