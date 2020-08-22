const Koa = require('koa');
const app = new Koa();
const auth = require('./routes');

const port = process.env.PORT;

app.use(auth.routes());

app.listen(port);