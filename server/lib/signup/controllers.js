const User = require('../models/User');

const postUser = async ctx => {
  const dirtyUser = ctx.request.body;
  const user = await User.addOne(dirtyUser);
  const token = user.generateAuthToken();
  ctx.set('Authorization', `Bearer ${token}`);
  ctx.response.status = 201;
  ctx.body = {user};
};

module.exports = {
  postUser,
};
