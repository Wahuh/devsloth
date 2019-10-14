const request = require('supertest');
const server = require('../../io-server');
const {
  setupAll,
  teardownEach,
  teardownAll,
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

describe('POST /api/boards/:board_id/lists', () => {
  const createListRequest = async (list, token) => {
    const response = await request(server)
      .post('/api/boards/1/lists')
      .send(list)
      .set('Authorization', `Bearer ${token}`);
    return response;
  };

  it('201: responds with a list object', async () => {
    const {token, boards} = await addTestUserWithBoards();
    const testList = {
      title: 'Test List',
    };
    const expected = {
      list: {
        id: 1,
        title: 'Test List',
        board_id: boards[0].id,
      },
    };
    const {status, body} = await createListRequest(testList, token);
    expect(status).toBe(201);
    expect(body).toEqual(expected);
  });

  it('400: responds with an errors array if the title is missing', async () => {
    const {token} = await addTestUserWithBoards();
    const testList = {};
    const expected = {
      errors: [
        {
          status: 400,
          message: 'title field is missing',
        },
      ],
    };
    const {status, body} = await createListRequest(testList, token);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an errors array if the title is not a string', async () => {
    const {token} = await addTestUserWithBoards();
    const testList = {
      title: 2,
    };
    const expected = {
      errors: [
        {
          status: 400,
          message: 'title field must be a string',
        },
      ],
    };
    const {status, body} = await createListRequest(testList, token);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an errors array if the title is longer than 150 characters', async () => {
    const {token} = await addTestUserWithBoards();
    const testList = {
      title: 'a'.repeat(151),
    };
    const expected = {
      errors: [
        {
          status: 400,
          message: 'title field should not be longer than 150 characters',
        },
      ],
    };
    const {status, body} = await createListRequest(testList, token);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('404: responds with an errors array if the board_id does not exist', async () => {
    const {token} = await addTestUserWithBoards();
    const testList = {
      title: 'Test List',
    };
    const expected = {
      errors: [
        {
          status: 404,
          message: 'board not found',
        },
      ],
    };
    const {status, body} = await request(server)
      .post(`/api/boards/9000/lists`)
      .send(testList)
      .set('Authorization', `Bearer ${token}`);
    expect(status).toBe(404);
    expect(body).toEqual(expected);
  });
});
