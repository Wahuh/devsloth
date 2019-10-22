const Koa = require('koa');
const meRouter = require('./routes');
const authenticate = require('../../middleware/authenticate');

const me = new Koa();

me.use(authenticate);
me.use(meRouter.routes());
me.use(meRouter.allowedMethods());

module.exports = me;
