const {pgHost, pgDatabase, pgUser, pgPassword} = require('./config');

module.exports = {
  client: 'pg',
  migrations: {
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
  connection: {
    host: pgHost,
    database: pgDatabase,
    user: pgUser,
    password: pgPassword,
  },
};
