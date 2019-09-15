const Router = require('@koa/router');
const {getUser, getUserBoards} = require('./controllers');

const meRouter = new Router();

meRouter.get('/', getUser);
meRouter.get('/boards', getUserBoards);

module.exports = meRouter;
