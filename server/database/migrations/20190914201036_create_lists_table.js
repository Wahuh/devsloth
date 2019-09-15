exports.up = function(knex) {
  return knex.schema.createTable('lists', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('title', 32).notNullable();
    table
      .integer('board_id')
      .references('boards.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists');
};
