const app = require('./app');
const realtime = require('./lib/realtime');

const ioServer = realtime.connect(app);

module.exports = ioServer;
