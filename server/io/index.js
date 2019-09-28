const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const {secret} = require('../config');

const authenticateSocket = (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    try {
      const payload = jwt.verify(socket.handshake.query.token, secret);
      const {id} = payload;
      // eslint-disable-next-line
      socket.id = id;
      next();
    } catch (err) {
      next(new Error('Access denied. Invalid token'));
    }
  } else {
    next(new Error('Access denied. Invalid token'));
  }
};

module.exports = app => {
  const server = http.createServer(app.callback());
  const io = socketIo(server);
  io.use(authenticateSocket);
  io.on('connection', socket => {
    socket.on('join', () => {});
  });
  return server;
};
