const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config');

const authenticateSocket = (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    try {
      const payload = jwt.verify(socket.handshake.query.token, secret);
      // eslint-disable-next-line
      socket.user = payload;
      next();
    } catch (err) {
      next(new Error('Access denied. Invalid token'));
    }
  } else {
    next(new Error('Access denied. Invalid token'));
  }
};

let connection = null;

class Realtime {
  constructor() {
    this.io = null;
  }

  connect(app) {
    const server = http.createServer(app.callback());
    this.io = socketIo(server);
    this.io.use(authenticateSocket);

    this.io.on('connection', socket => {
      socket.on('join', room => {
        socket.join(room);
      });
    });
    return server;
  }

  push(event, room, data) {
    this.io.in(room).emit(event, data);
  }

  static init(app) {
    if (!connection) {
      connection = new Realtime();
      const server = connection.connect(app);
      return server;
    }
    return null;
  }

  static getConnection() {
    if (!connection) {
      throw new Error('no active connection');
    }
    return connection;
  }
}

module.exports = {
  connect: Realtime.init,
  connection: Realtime.getConnection,
};
