const Router = require('@koa/router');
const {postBoardList} = require('./controllers');
const createValidator = require('../../middleware/createValidator');
const postBoardListSchema = require('../schemas/postBoardList.json');

const boardRouter = new Router();

boardRouter.post(
  '/:board_id/lists',
  createValidator(postBoardListSchema),
  postBoardList,
);

module.exports = boardRouter;
