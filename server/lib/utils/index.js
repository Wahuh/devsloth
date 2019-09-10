const connection = require('../../database/connection');

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

module.exports = {connect, setup, teardown, destroy};
