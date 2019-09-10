const knex = require('knex');
const {Model} = require('objection');
const dbConfig = require('../knexfile');

const connection = knex(dbConfig);
Model.knex(connection);

module.exports = connection;
