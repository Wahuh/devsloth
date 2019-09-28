const Task = require('../models/Task');

const postListTask = async ctx => {
  try {
    const {id} = ctx.request.user;
    const {list_id} = ctx.params;
    const {title, description} = ctx.request.body;
    const task = await Task.addOne({title, description, list_id: +list_id});
    ctx.app.emit('push', 'task create', task, id);
    ctx.status = 204;
    ctx.body = {};
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {
  postListTask,
};
