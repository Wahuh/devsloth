const got = require("got");
const { Client } = require("pg");

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
});

test("health check is successful", async () => {
  const { statusCode } = await got("http://auth:8080/healthz");
  expect(statusCode).toBe(200);
});

test("redirects to GitHub (fake server) with state param", async () => {
  const { statusCode, headers } = await got(
    "http://auth:8080/auth/github/redirect",
    {
      followRedirect: false,
    }
  );

  // should persist state as a uuid in database
  const sql = `SELECT * FROM challenge`;
  const res = await client.query(sql);
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const {
    rows: [{ state }],
  } = res;

  expect(statusCode).toBe(301);
  expect(state).toMatch(uuidRegex);
  expect(headers["cache-control"]).toBe("no-store");
  expect(headers.location).toBe(
    `http://fake_server:8081/login/oauth/authorize?client_id=abcdef123456&state=${state}`
  );
});

test("creates account and redirects to web app url", async () => {
  const searchParams = { code: "abcd", state: "abc123" };
  const { statusCode, headers } = await got(
    "http://auth:8080/auth/github/continue",
    {
      searchParams,
      followRedirect: false,
    }
  );
  const sql = `SELECT * FROM account`;
  const res = await client.query(sql);
  const {
    rows: [account],
  } = res;

  expect(statusCode).toBe(301);
  expect(headers["cache-control"]).toBe("no-store");
  expect(headers.location).toBe("http://localhost:3000/@me");
  expect(account).toEqual({
    email: "example@gmail.com",
    created_at: expect.any(Date),
    id: 1,
    refresh_token: expect.any(String),
  });
});
