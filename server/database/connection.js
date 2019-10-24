const knex = require('knex');
const {Model} = require('objection');
const dbConfig = require('../knexfile');

const connection = knex(dbConfig);
Model.knex(connection);

if (process.env.NODE_ENV === 'production') {
  connection.migrate.latest();
}

module.exports = connection;
