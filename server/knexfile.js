const {pgHost, pgDatabase, pgUser, pgPassword, env} = require('./config');

if (env === 'development') {
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
} else {
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
}
