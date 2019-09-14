const Router = require('@koa/router');
const {getUser} = require('./controllers');

const meRouter = new Router();

meRouter.get('/', getUser);

module.exports = meRouter;
