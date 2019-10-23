module.exports = {
  pgPassword: process.env.POSTGRES_PASSWORD,
  pgDatabase: process.env.POSTGRES_DB,
  pgUser: process.env.POSTGRES_USER,
  pgPort: process.env.POSTGRES_PORT,
  pgHost: process.env.POSTGRES_HOST,
  secret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
};
