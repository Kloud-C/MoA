CREATE TABLE IF NOT EXISTS worldcup_votes (
  vote_id TEXT PRIMARY KEY,
  game_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  bracket_size INTEGER NOT NULL CHECK (bracket_size IN (8, 16, 32)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS worldcup_votes_game_item_idx
  ON worldcup_votes (game_id, item_id);
