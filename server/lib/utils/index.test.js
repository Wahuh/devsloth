const {seed, setupAll, teardownAll, teardownEach} = require('./index');
const connection = require('../../database/connection');

describe('seed', () => {
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

  it('seeds the database with a user and returns object containing token and user', async () => {
    const initialUser = {
      email: 'thanh@gmail.com',
      password: 'abc123',
      username: 'Thanh',
    };
    const {token, user} = await seed({user: initialUser});
    const [actualUser] = await connection.select('*').from('users');
    expect(actualUser).toEqual({
      id: 1,
      email: 'thanh@gmail.com',
      password: expect.any(String),
      username: 'Thanh',
      room: expect.any(String),
    });
    expect(typeof token).toBe('string');
    expect(user).toEqual(
      expect.objectContaining({
        email: 'thanh@gmail.com',
        id: 1,
        username: 'Thanh',
        room: expect.any(String),
      }),
    );
  });

  it('seeds the database with boards', async () => {
    const boards = [{title: 'hello board', owner_id: 1, owner_type: 'user'}];
    await seed({boards});
    const [actualBoard] = await connection.select('*').from('boards');
    expect(actualBoard).toEqual({
      id: 1,
      title: 'hello board',
      owner_id: 1,
      owner_type: 'user',
    });
  });

  it('seeds the database with boards and lists', async () => {
    const boards = [{title: 'hello board', owner_id: 1, owner_type: 'user'}];
    const lists = [{title: 'hello list', board_id: 1}];
    await seed({boards, lists});
    const [actualList] = await connection.select('*').from('lists');
    expect(actualList).toEqual({
      id: 1,
      title: 'hello list',
      board_id: 1,
    });
  });

  it('seeds the database with boards, lists and tasks', async () => {
    const boards = [{title: 'hello board', owner_id: 1, owner_type: 'user'}];
    const lists = [{title: 'hello list', board_id: 1}];
    const tasks = [
      {title: 'hello task', list_id: 1, description: '', position: 0},
    ];

    await seed({boards, lists, tasks});
    const [actualTask] = await connection.select('*').from('tasks');
    expect(actualTask).toEqual({
      id: 1,
      title: 'hello task',
      description: '',
      list_id: 1,
      position: 0,
    });
  });
});
