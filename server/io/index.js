const http = require('http');
const socketIo = require('socket.io');

module.exports = app => {
  const server = http.createServer(app.callback());
  const io = socketIo(server);
  io.on('connection', socket => {
    socket.on('join', () => {});
  });
  return server;
};
