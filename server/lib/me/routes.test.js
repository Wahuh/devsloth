const request = require('supertest');
const server = require('../../io-server');
const {setupAll, teardownEach, teardownAll, addTestUser} = require('../utils');

beforeAll(async done => {
  await setupAll();
  done();
});

afterAll(async done => {
  await teardownAll();
  done();
});

beforeEach(async done => {
  await teardownEach();
  done();
});

afterEach(() => {
  server.close();
});

describe('GET /api/me', () => {
  const meRequest = async () => {
    const {token} = await addTestUser();
    const response = await request(server)
      .get('/api/me')
      .set('Authorization', `Bearer ${token}`);
    return response;
  };

  it('200: responds with a user object', async () => {
    const expected = {
      user: {
        id: expect.any(Number),
        email: 'test@gmail.com',
        username: 'Tester',
      },
    };

    const {status, body} = await meRequest();
    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });

  it('401: responds with an errors array if no auth token is provided', async () => {
    const expected = {
      errors: [{message: 'Access denied. Invalid token', status: 401}],
    };

    const {status, body} = await request(server).get('/api/me');
    expect(status).toBe(401);
    expect(body).toEqual(expected);
  });
});

describe('GET /api/me/boards', () => {
  const boardsRequest = async () => {
    const {token} = await addTestUser();
    const response = await request(server)
      .get('/api/me/boards')
      .set('Authorization', `Bearer ${token}`);
    return response;
  };

  it('200: responds with a list of board objects', async () => {
    const expected = {
      boards: [{title: 'test_board_1'}],
    };

    const {status, body} = await boardsRequest();
    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });
});
