const Router = require('@koa/router');
const {postListTask, getTasks} = require('./controllers');

const listRouter = new Router();

listRouter.post('/:list_id/tasks', postListTask);
listRouter.get('/:list_id/tasks', getTasks);
module.exports = listRouter;
