const User = require('../models/User');

const postUser = async ctx => {
  try {
    const dirtyUser = ctx.request.body;
    const user = await User.addOne(dirtyUser);
    const token = user.generateAuthToken();
    ctx.set('Authorization', `Bearer ${token}`);
    ctx.response.status = 201;
    ctx.body = {user};
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {
  postUser,
};
