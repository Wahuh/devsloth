const request = require('supertest');
const server = require('../../io-server');
const {setup, teardown, destroy, connect} = require('../utils');

beforeAll(() => {
  connect();
});

afterAll(async () => {
  await destroy();
});

beforeEach(async () => {
  await setup();
});

afterEach(async () => {
  await teardown();
});

describe('/signup', () => {
  it('POST 201: responds with an Authorization header containing Bearer and jwt', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const response = await request(server)
      .post('/signup')
      .send(user);

    const {statusCode, headers} = response;
    expect(statusCode).toBe(201);
    expect(headers).toHaveProperty('authorization');
    const {authorization} = headers;
    expect(/^Bearer\s.+/.test(authorization)).toBe(true);
  });

  it('POST 201: responds with a user object that contains an id, username and email but no password', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const response = await request(server)
      .post('/signup')
      .send(user);

    const {statusCode, body} = response;
    expect(statusCode).toBe(201);
    expect(body).toEqual(
      expect.objectContaining({
        user: {
          id: expect.any(Number),
          email: 'tmd@gmail.com',
          username: 'Wahuh',
        },
      }),
    );
  });
});
