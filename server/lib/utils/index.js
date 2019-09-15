// eslint-disable-next-line
const knexCleaner = require('knex-cleaner');
const knexMigrate = require('knex-migrate');

const connection = require('../../database/connection');
const Board = require('../models/Board');
const User = require('../models/User');

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

module.exports = {
  setupAll,
  teardownEach,
  teardownAll,
  addTestUser,
  addTestUserWithBoards,
};
