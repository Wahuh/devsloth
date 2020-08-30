exports.up = function (knex) {
  return knex.schema.createTable("challenge", (table) => {
    table.increments("id");
    table.string("random_string");
    table.datetime("created_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("challenge");
};
