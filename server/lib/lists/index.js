const Koa = require('koa');
const listRouter = require('./routes');
const authenticate = require('../../middleware/authenticate');

const lists = new Koa();

lists.use(authenticate);
lists.use(listRouter.routes());
lists.use(listRouter.allowedMethods());

module.exports = lists;
