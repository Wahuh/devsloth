const Koa = require('koa');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const signup = require('./lib/signup');

app.use(bodyParser());
app.use(mount('/signup', signup));

module.exports = app;
