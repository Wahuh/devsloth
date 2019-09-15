exports.up = function(knex) {
  return knex.schema.createTable('boards', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('title', 32).notNullable();
    table.integer('owner_id').notNullable();
    table.enu('owner_type', ['user', 'channel']).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('boards');
};
