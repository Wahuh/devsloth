const io = require('socket.io-client');

class TestClient {
  constructor() {
    this.socket = null;
    this.rooms = [];
  }

  async connect(token) {
    this.socket = io('http://localhost:3001');
    console.log(this.socket.connected);
    // return new Promise((resolve, reject) => {
    //   this.socket = io('http://localhost:3001', {query: {token}});
    //   console.log(this.socket.connected);
    //   this.socket.once('connect', () => {
    //     console.log('worked');
    //     resolve();
    //   });
    //   this.socket.on('error', err => {
    //     console.log('erroed', err);
    //   });
    //   // .once('connect_error', err => {
    //   //   console.log('rejected')
    //   //   reject(err)
    //   // })
    //   // .once('connect_timeout', reject)
    // });
  }

  get isConnected() {
    return this.socket.connected;
  }

  async join(rooms) {
    if (typeof rooms === 'string') {
      rooms = [rooms];
    }

    return new Promise((resolve, reject) => {
      this.socket.emit('join', rooms);
      this.socket.on('joined', rooms => {
        this.rooms.push(...rooms);
        resolve();
      });
    });
  }

  disconnect() {
    if (this.isConnected) {
      this.socket.disconnect();
    }
  }
}

module.exports = TestClient;
