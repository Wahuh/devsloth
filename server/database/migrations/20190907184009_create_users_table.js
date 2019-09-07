exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('username', 20).notNullable();
    table
      .string('email', 255)
      .notNullable()
      .unique();
    table.string('password', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
