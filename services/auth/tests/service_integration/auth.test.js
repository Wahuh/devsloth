/**
 * @jest-environment node
 */
const { Client } = require("pg");
const got = require("got");

let client;

beforeAll(async () => {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
});

afterAll(async () => {
  await client.end();
});

beforeEach(async () => {
  await client.query("TRUNCATE TABLE challenge;");
  await client.query("TRUNCATE TABLE account RESTART IDENTITY;");
});

test("health check is successful", async () => {
  const { statusCode } = await got("http://auth:8080/healthz");
  expect(statusCode).toBe(200);
});

test("redirects to GitHub (fake server) with state param", async () => {
  const { statusCode, url } = await got(
    "http://auth:8080/auth/github/redirect"
  );

  // should persist state as a uuid in database
  const sql = `SELECT * FROM challenge`;
  const res = await client.query(sql);
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const {
    rows: [{ state }],
  } = res;

  const urlRegex = /http:\/\/fake:8081\/login\/oauth\/authorize\?client_id=abcdef123456&state=\w*/;

  expect(statusCode).toBe(200);
  expect(state).toMatch(uuidRegex);
  expect(url).toMatch(urlRegex);
});

test("creates account and redirects to web app", async () => {
  const searchParams = new URLSearchParams([
    ["code", "abcd"],
    ["state", "abc123"],
  ]);
  const { statusCode, url } = await got(
    "http://auth:8080/auth/github/continue",
    { searchParams, followRedirect: false }
  );
  const sql = `SELECT * FROM account`;
  const res = await client.query(sql);
  const {
    rows: [account],
  } = res;

  expect(statusCode).toBe(301);
  expect(account).toEqual({
    email: "example@gmail.com",
    created_at: expect.any(Date),
    id: 1,
    refresh_token: expect.any(String),
  });
});
