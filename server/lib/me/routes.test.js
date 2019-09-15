const request = require('supertest');
const server = require('../../io-server');
const {
  setupAll,
  teardownEach,
  teardownAll,
  addTestUser,
  addTestUserWithBoards,
} = require('../utils');

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
  const boardsRequest = async token => {
    const response = await request(server)
      .get('/api/me/boards')
      .set('Authorization', `Bearer ${token}`);
    return response;
  };

  it('200: responds with a list of board objects', async () => {
    const {token, user} = await addTestUserWithBoards();
    const expected = {
      boards: [
        {
          title: 'test_board_1',
          id: expect.any(Number),
          owner_id: user.id,
          owner_type: 'user',
        },
        {
          title: 'test_board_2',
          id: expect.any(Number),
          owner_id: user.id,
          owner_type: 'user',
        },
      ],
    };

    const {status, body} = await boardsRequest(token);
    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });

  it('401: responds with an errors array if no auth token is provided', async () => {
    const expected = {
      errors: [{message: 'Access denied. Invalid token', status: 401}],
    };

    const {status, body} = await request(server).get('/api/me/boards');
    expect(status).toBe(401);
    expect(body).toEqual(expected);
  });
});
