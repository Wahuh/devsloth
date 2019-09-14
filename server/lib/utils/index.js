// eslint-disable-next-line
const knexCleaner = require('knex-cleaner');
const knexMigrate = require('knex-migrate');

const connection = require('../../database/connection');
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

// const addTestUserWithBoards = async () => {
//   const testUser = {
//     username: 'Tester',
//     email: 'test@gmail.com',
//     password: 'testing123',
//   };
//   const user = await User.addOne(testUser);
//   const boards = [
//     {title: 'test_board_1', owner_id: user.id},
//     {title: 'test_board_2', owner_id: user.id},
//   ];
//   await Board.query().insert(boards);
// };

module.exports = {
  setupAll,
  teardownEach,
  teardownAll,
  addTestUser,
};
