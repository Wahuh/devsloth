const {pgHost, pgDatabase, pgUser, pgPassword} = require('./config');

module.exports = {
  client: 'pg',
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
  connection: {
    host: pgHost,
    database: pgDatabase,
    user: pgUser,
    password: pgPassword,
  },
};
