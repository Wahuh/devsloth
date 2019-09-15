const User = require('../models/User');

const getUser = async ctx => {
  const {id} = ctx.request.user;
  const user = await User.findById(id);
  ctx.body = {user};
};

const getUserBoards = async ctx => {
  const {id} = ctx.request.user;
  const user = await User.findById(id);
  const boards = await user.findBoards();
  ctx.body = {boards};
};

module.exports = {getUser, getUserBoards};
