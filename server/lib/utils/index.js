const connection = require('../../database/connection');
const User = require('../models/User');

const setup = () => {
  return connection.migrate.latest();
  // await connection.seed.run();
};

const teardown = () => {
  return connection.migrate.rollback();
};

const connect = () => {
  connection.initialize();
};

const destroy = () => {
  return connection.destroy();
};

const addTestUser = async user => {
  await User.addOne(user);
};

module.exports = {connect, setup, teardown, destroy, addTestUser};
