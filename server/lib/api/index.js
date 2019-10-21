const Koa = require('koa');
const mount = require('koa-mount');

const api = new Koa();
const boards = require('../boards');
const lists = require('../lists');
const me = require('../me');
const signup = require('../signup');
const tasks = require('../tasks');

api.use(mount('/boards', boards));
api.use(mount('/lists', lists));
api.use(mount('/me', me));
api.use(mount('/signup', signup));
api.use(mount('/tasks', tasks));

module.exports = api;
