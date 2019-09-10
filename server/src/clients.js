let clients = {};

module.exports = {
    setClientId: function(userId, socketId) {
        clients[userId] = socketId;
    },

    getClientId: function(userId) {
        if (clients.hasOwnProperty(userId)) {
            return clients[userId];
        }
    },

    removeClientID: function(userId) {
        if (clients.hasOwnProperty(userId)) {
            delete clients[userId];
        }
    }
}