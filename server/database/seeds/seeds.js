const shortid = require('shortid');

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex
        .insert({
          username: 'Thanh',
          email: 'test@gmail.com',
          password: 'abc123',
          room: shortid.generate(),
        })
        .into('users')
        .returning('*');
    });
};
