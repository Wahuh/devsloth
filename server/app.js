const Koa = require('koa');
const mount = require('koa-mount');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const handleErrors = require('./middleware/errors');

const app = new Koa();
const signup = require('./lib/signup');

app.use(cors());
app.use(bodyParser());
app.use(mount('/signup', signup));
app.on('error', handleErrors);

module.exports = app;
