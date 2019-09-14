const Koa = require('koa');
const mount = require('koa-mount');

const api = new Koa();

const me = require('../me');
const signup = require('../signup');

api.use(mount('/me', me));
api.use(mount('/signup', signup));

module.exports = api;
