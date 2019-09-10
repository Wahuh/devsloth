const Koa = require('koa');
const mount = require('koa-mount');
const api = new Koa();

const signup = require('../signup');

api.use(mount('/signup', signup));

module.exports = api;
