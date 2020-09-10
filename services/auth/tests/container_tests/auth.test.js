const got = require("got");

test("health check is successful", async () => {
  const { statusCode } = await got("http://auth:8080/healthz");
  expect(statusCode).toBe(200);
});
