const Router = require('@koa/router');

const signupRouter = new Router();
signupRouter.get('/', ctx => {
  console.log('cn')
  ctx.body = 'g'
})
signupRouter.post('/', ctx => {
  ctx.response.status = 201;
  ctx.body = "hello2saasdasd";
});

module.exports = signupRouter;
