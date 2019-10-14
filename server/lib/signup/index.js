const Koa = require('koa');
const signupRouter = require('./routes');

const signup = new Koa();
signup.use(signupRouter.routes());
signup.use(signupRouter.allowedMethods());

module.exports = signup;
