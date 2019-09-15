const Board = require('../models/Board');
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

const postUserBoard = async ctx => {
  const {id} = ctx.request.user;
  const {title} = ctx.request.body;
  const board = await Board.addOne({title, owner_id: id, owner_type: 'user'});
  ctx.status = 201;
  ctx.body = {board};
};

module.exports = {getUser, getUserBoards, postUserBoard};
