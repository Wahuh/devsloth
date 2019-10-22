const Router = require('@koa/router');
const {patchTaskPosition} = require('./controllers');

const taskRouter = new Router();

taskRouter.patch('/:task_id/position', patchTaskPosition);

module.exports = taskRouter;
