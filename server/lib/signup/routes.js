const Router = require('@koa/router');
const {postUser} = require('./controllers');

const signupRouter = new Router();

signupRouter.post('/', postUser);

module.exports = signupRouter;
