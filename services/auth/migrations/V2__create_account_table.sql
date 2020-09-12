CREATE TABLE account (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  refresh_token TEXT
);