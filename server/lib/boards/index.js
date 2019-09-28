const Koa = require('koa');
const boardRouter = require('./routes');
const authenticate = require('../../middleware/authenticate');

const boards = new Koa();

boards.use(authenticate);
boards.use(boardRouter.routes());
boards.use(boardRouter.allowedMethods());

module.exports = boards;
