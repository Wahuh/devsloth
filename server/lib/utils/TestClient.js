// eslint-disable-next-line
const io = require('socket.io-client');

class TestClient {
  constructor(token) {
    this.socket = io('http://localhost:4500', {query: {token}});
    this.socket.on('connect', () => {});
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }

  join(room) {
    this.socket.emit('join', room);
  }

  // async join(rooms) {
  //   if (typeof rooms === 'string') {
  //     rooms = [rooms];
  //   }

  //   return new Promise((resolve, reject) => {
  //     this.socket.emit('join', rooms);
  //     this.socket.on('joined', rooms => {
  //       this.rooms.push(...rooms);
  //       resolve();
  //     });
  //   });
  // }

  disconnect() {
    this.socket.disconnect();
  }
}

module.exports = TestClient;
