const Koa = require('koa');
const taskRouter = require('./routes');
const authenticate = require('../../middleware/authenticate');

const tasks = new Koa();

tasks.use(authenticate);
tasks.use(taskRouter.routes());
tasks.use(taskRouter.allowedMethods());

module.exports = tasks;
