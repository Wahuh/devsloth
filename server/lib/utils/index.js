const knexCleaner = require('knex-cleaner');
const connection = require('../../database/connection');
const User = require('../models/User');

const setupAll = () => {
  connection.initialize();
  return connection.migrate.latest();
  // await connection.seed.run();
};

const teardownEach = () => {
  return knexCleaner.clean(connection);
};

const teardownAll = () => {
  return connection.destroy();
};

const addTestUser = async user => {
  await User.addOne(user);
};

module.exports = {setupAll, teardownEach, teardownAll, addTestUser};
