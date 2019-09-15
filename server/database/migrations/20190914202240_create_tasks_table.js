exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('title', 100).notNullable();
    table.string('description', 1000);
    table
      .integer('list_id')
      .references('lists.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
