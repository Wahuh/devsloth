const request = require('supertest');
const {
  setupAll,
  teardownEach,
  teardownAll,
  seed,
  TestClient,
} = require('../utils');
const server = require('../../io-server');

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

describe('PATCH /api/tasks/:task_id/position', () => {
  const patchTaskPositionRequest = async (token, data) => {
    const response = await request(server)
      .patch('/api/tasks/1/position')
      .send(data)
      .set('Authorization', `Bearer ${token}`);
    return response;
  };

  it('204: responds with no content and pushes a task object to the client', async done => {
    const boards = [{title: 'hello board', owner_id: 1, owner_type: 'user'}];
    const lists = [{title: 'hello list', board_id: 1}];
    const tasks = [
      {title: 'hello task', list_id: 1, description: '', position: 0},
    ];
    const {token, user} = await seed({boards, lists, tasks});
    const task = {position: 200, room: user.room};
    const expected = {
      task: {
        id: 1,
        title: 'hello task',
        list_id: 1,
        position: 200,
        description: '',
      },
    };
    const client = new TestClient(token);
    client.join(user.room);
    client.on('task update', data => {
      expect(data).toEqual(expected);
      client.disconnect();
      done();
    });
    const {status} = await patchTaskPositionRequest(token, task);
    expect(status).toBe(204);
  });
});
