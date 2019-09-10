const Router = require('@koa/router');

const signupRouter = new Router();

signupRouter.post('/', ctx => {
  ctx.response.status = 201;
});

module.exports = signupRouter;
