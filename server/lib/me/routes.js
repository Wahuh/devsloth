const Router = require('@koa/router');
const {getUser, getUserBoards, postUserBoard} = require('./controllers');
const createValidator = require('../../middleware/createValidator');
const schema = require('../schemas/postBoard.json');

const meRouter = new Router();

meRouter.get('/', getUser);
meRouter.get('/boards', getUserBoards);
meRouter.post('/boards', createValidator(schema), postUserBoard);

module.exports = meRouter;
