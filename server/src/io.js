const socketIo = require("socket.io");

let io;

module.exports = {
    init: function(server) {
        io = socketIo(server);
        console.log("io", io);
        return io;
    },

    getIo: function() {
        if (!io) {
            throw new Error("must call .init(server) before you can call .getio()");
        }
        return io;
    }
}