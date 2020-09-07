CREATE EXTENSION pgcrypto;

CREATE TABLE challenge (
  state UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);