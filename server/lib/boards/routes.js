const Router = require('@koa/router');
const {postBoardList, getBoard} = require('./controllers');
const createValidator = require('../../middleware/createValidator');
const postBoardListSchema = require('../schemas/postBoardList.json');

const boardRouter = new Router();

boardRouter.get('/:board_id', getBoard);

boardRouter.post(
  '/:board_id/lists',
  createValidator(postBoardListSchema),
  postBoardList,
);

module.exports = boardRouter;
