const Task = require('../models/Task');
const realtime = require('../realtime');

const patchTaskPosition = async ctx => {
  try {
    const {task_id} = ctx.params;
    const {position, room} = ctx.request.body;
    const task = await Task.updateOne({id: task_id, position});
    const connection = realtime.connection();
    connection.push('task update', room, {task});
    ctx.status = 204;
  } catch (err) {
    console.log(err);
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {patchTaskPosition};
