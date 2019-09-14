const User = require('../models/User');

const getUser = async ctx => {
  const {id} = ctx.request.user;
  const user = await User.findById(id);
  ctx.body = {user};
};

module.exports = {getUser};
