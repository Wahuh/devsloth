const Router = require('@koa/router');
const {
  getUser,
  getUserBoards,
  patchUserBoard,
  postUserBoard,
} = require('./controllers');
const createValidator = require('../../middleware/createValidator');
const postBoardSchema = require('../schemas/postBoard.json');
const patchBoardSchema = require('../schemas/patchBoard.json');

const meRouter = new Router();

meRouter.get('/', getUser);
meRouter.get('/boards', getUserBoards);
meRouter.post('/boards', createValidator(postBoardSchema), postUserBoard);
meRouter.patch(
  '/boards/:board_id',
  createValidator(patchBoardSchema),
  patchUserBoard,
);

module.exports = meRouter;
