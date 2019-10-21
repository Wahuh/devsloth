// eslint-disable-next-line
const knexCleaner = require('knex-cleaner');
const knexMigrate = require('knex-migrate');

const connection = require('../../database/connection');
const Board = require('../models/Board');
const List = require('../models/List');
const Task = require('../models/Task');
const User = require('../models/User');
const TestClient = require('./TestClient');

const setupAll = async () => {
  connection.initialize();
  await knexMigrate('down', {to: 0});
  await knexMigrate('up');
  // await connection.seed.run();
};

const teardownEach = async () => {
  await knexCleaner.clean(connection, {
    mode: 'truncate',
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });
};

const teardownAll = async () => {
  await knexMigrate('down', {to: 0});
  await connection.destroy();
};

const addTestUser = async user => {
  const testUser = {
    email: 'test@gmail.com',
    username: 'Tester',
    password: 'testing123',
  };
  const insertedUser = await User.addOne(user || testUser);
  const token = await insertedUser.generateAuthToken();
  return {token, user: insertedUser};
};

const addTestUserWithBoardsListsAndTasks = async () => {
  const {token, user} = await addTestUser();
  const boards = [
    {title: 'test_board_1', owner_id: user.id, owner_type: 'user'},
  ];

  const lists = [{title: 'test_list_1', board_id: 1}];
  const insertedBoards = await Board.query()
    .insert(boards)
    .returning('*');
  const insertedLists = await List.query()
    .insert(lists)
    .returning('*');

  const tasks = [{title: 'hello task', list_id: 1, description: ''}];
  const insertedTasks = await Task.query()
    .insert(tasks)
    .returning('*');
  return {
    token,
    tasks: insertedTasks,
    lists: insertedLists,
    boards: insertedBoards,
  };
};

const addTestUserWithBoards = async () => {
  const {token, user} = await addTestUser();
  const boards = [
    {title: 'test_board_1', owner_id: user.id, owner_type: 'user'},
    {title: 'test_board_2', owner_id: user.id, owner_type: 'user'},
  ];
  const insertedBoards = await Board.query()
    .insert(boards)
    .returning('*');
  return {token, user, boards: insertedBoards};
};

const addUserWithBoardsAndLists = async () => {
  const {token, user} = await addTestUser();
  const boards = [
    {title: 'test_board_1', owner_id: user.id, owner_type: 'user'},
    {title: 'test_board_2', owner_id: user.id, owner_type: 'user'},
  ];
  const insertedBoards = await Board.query()
    .insert(boards)
    .returning('*');

  const lists = [
    {title: 'test_list_1', board_id: 1},
    {title: 'test_list_2', board_id: 2},
  ];
  const insertedLists = await List.query()
    .insert(lists)
    .returning('*');
  return {token, user, boards: insertedBoards, lists: insertedLists};
};

const seed = async ({
  user = {
    email: 'tmd@gmail.com',
    password: 'abc123',
    username: 'Thanh',
  },
  boards = null,
  lists = null,
  tasks = null,
}) => {
  const insertedUser = await User.addOne(user);
  const token = await insertedUser.generateAuthToken();

  if (boards) {
    await connection('boards').insert(boards);
  }

  if (lists) {
    await connection('lists').insert(lists);
  }

  if (tasks) {
    await connection('tasks').insert(tasks);
  }
  return {token, user: insertedUser};
};

module.exports = {
  setupAll,
  teardownEach,
  teardownAll,
  addTestUser,
  addTestUserWithBoards,
  addUserWithBoardsAndLists,
  addTestUserWithBoardsListsAndTasks,
  TestClient,
  seed,
};
