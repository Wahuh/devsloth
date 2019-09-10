const {pgHost, pgDatabase, pgUser, pgPassword} = require('./config');

module.exports = {
  client: 'pg',
  migrations: {
    directory: './database/migrations',
  },
  connection: {
    host: pgHost,
    database: pgDatabase,
    user: pgUser,
    password: pgPassword,
  },
};
