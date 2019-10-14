const Router = require('@koa/router');
const {postListTask} = require('./controllers');

const listRouter = new Router();

listRouter.post('/:list_id/tasks', postListTask);

module.exports = listRouter;
