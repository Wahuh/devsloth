const request = require('supertest');
const server = require('../../io-server');
const {
  setupAll,
  teardownEach,
  teardownAll,
  addUserWithBoardsAndLists,
  addTestUserWithBoardsListsAndTasks,
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
  server.listen(4500);
  await teardownEach();
  done();
});

afterEach(() => {
  server.close();
});

describe('GET /api/lists/:list_id/tasks', () => {
  const getTasksRequest = async token => {
    const response = await request(server)
      .get(`/api/lists/1/tasks`)
      .set('Authorization', `Bearer ${token}`);
    return response;
  };
  it('200: responds with an array of tasks', async () => {
    const {token} = await addTestUserWithBoardsListsAndTasks();
    const {status, body} = await getTasksRequest(token);
    const expected = {
      tasks: [
        {
          title: 'hello task',
          list_id: 1,
          description: '',
          id: 1,
          position: 500,
        },
      ],
    };
    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });
});

describe('POST /api/lists/:list_id/tasks', () => {
  // const postTaskRequest = async (task, token) => {
  //   const response = await request(server)
  //     .post(`/api/lists/1/tasks`)
  //     .send(task)
  //     .set('Authorization', `Bearer ${token}`);
  //   return response;
  // };

  // it('204: responds with no content', async () => {
  //   const {token} = await addUserWithBoardsAndLists();
  //   const testTask = {
  //     title: 'hello',
  //     description: 'This is a test description.',
  //   };

  //   const expected = {};
  //   const {status, body} = await postTaskRequest(testTask, token);
  //   expect(status).toBe(204);
  //   expect(body).toEqual(expected);
  // });

  // it('pushes a task object to a connected user', async done => {
  //   const {token, lists} = await addUserWithBoardsAndLists();
  //   const testTask = {
  //     title: 'hello',
  //     description: 'This is a test description.',
  //   };
  //   const socket = io('http://localhost:4500', {query: {token}});
  //   socket.on('task create', task => {
  //     expect(task).toEqual({
  //       id: expect.any(Number),
  //       title: 'hello',
  //       description: 'This is a test description.',
  //       list_id: lists[0].id,
  //     });
  //     done();
  //   });
  //   await postTaskRequest(testTask, token);
  // });

  it('401: responds with an errors array if no auth token is provided', async () => {
    const expected = {
      errors: [{message: 'Access denied. Invalid token', status: 401}],
    };

    const {status, body} = await request(server).post('/api/lists/1/tasks');
    expect(status).toBe(401);
    expect(body).toEqual(expected);
  });

  it('404: responds with an errors array if list_id does not exist', async () => {
    const {token} = await addUserWithBoardsAndLists();
    const testTask = {
      title: 'hello',
      description: 'This is a test description.',
    };
    const expected = {
      errors: [{message: 'List not found', status: 404}],
    };
    const {status, body} = await request(server)
      .post(`/api/lists/9000/tasks`)
      .send(testTask)
      .set('Authorization', `Bearer ${token}`);
    expect(status).toBe(404);
    expect(body).toEqual(expected);
  });
});
