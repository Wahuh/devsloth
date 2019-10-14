const jwt = require('jsonwebtoken');
const {secret} = require('../config');

const authenticate = async (ctx, next) => {
  const bearerToken = ctx.request.get('Authorization');
  if (!/^Bearer\s.+/.test(bearerToken)) {
    ctx.status = 401;
    ctx.body = {
      errors: [{status: 401, message: 'Access denied. Invalid token'}],
    };
  }
  const token = bearerToken.substring(7);
  try {
    const payload = jwt.verify(token, secret);
    ctx.request.user = payload;
    await next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authenticate;
