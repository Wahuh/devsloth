const Router = require('@koa/router');
const {postUser} = require('./controllers');
const createValidator = require('../../middleware/createValidator');
const schema = require('./schemas/signup.json');

const signupRouter = new Router();

signupRouter.post('/', createValidator(schema), postUser);

module.exports = signupRouter;
