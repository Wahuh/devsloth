const app = require('./app');

const ioServer = require('./io')(app);

module.exports = ioServer;
