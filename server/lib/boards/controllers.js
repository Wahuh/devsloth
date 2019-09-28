const Board = require('../models/Board');
const List = require('../models/List');

const postBoardList = async ctx => {
  try {
    const {board_id} = ctx.params;
    const {title} = ctx.request.body;
    const board = await Board.findById(board_id);
    const list = await List.addOne({title, board_id: board.id});
    ctx.status = 201;
    ctx.body = {list};
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = {
  postBoardList,
};
