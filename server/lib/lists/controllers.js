const Task = require('../models/Task');

const postListTask = async ctx => {
  try {
    const {id} = ctx.request.user;
    const {list_id} = ctx.params;
    const {title} = ctx.request.body;
    const task = await Task.addOne({title, description: '', list_id: +list_id});
    ctx.app.emit('push', 'task create', task, id);
    ctx.status = 201;
    ctx.body = {task};
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {
  postListTask,
};
