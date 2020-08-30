const config = require("./config");

module.exports = {
  client: "pg",
  pool: {
    min: 2,
    max: 10,
  },
  connection: {
    host: config.DB_HOST,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
