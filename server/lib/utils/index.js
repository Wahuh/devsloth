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
  await User.addOne(user);
};

module.exports = {setupAll, teardownEach, teardownAll, addTestUser};
