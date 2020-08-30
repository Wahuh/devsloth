exports.up = function (knex) {
  return knex.schema.createTable("account", (table) => {
    table.increments("id");
    table.string("email");
    table.string("username");
    table.datetime("created_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("account");
};
