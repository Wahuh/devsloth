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

const patchUserBoard = async ctx => {
  try {
    const {body} = ctx.request;
    const {board_id} = ctx.params;
    const board = await Board.findById(board_id);
    const updatedBoard = await board.update(body);
    ctx.body = {board: updatedBoard};
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {getUser, getUserBoards, postUserBoard, patchUserBoard};
