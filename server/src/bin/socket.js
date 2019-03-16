
const shortid = require("shortid");
const clients = require("../clients");
let groups = {

}

module.exports = function(io) {
    io.sockets.on("connection", socket => {
        if (socket.handshake.query.userId) {
            clients.setClientId(socket.handshake.query.userId, socket.id);
        }

        socket.on("disconnect", reason => {
            console.log(reason, "DISCONNECTED");
            //remove clientId
        });

        socket.on("sendMessage", ({ text, channel, member }) => {
            const message = {
                _id: shortid.generate(),
                text,
                channel,
                member,
                timestamp: Date.now()
            };
            io.to(channel).emit("receiveMessage", message);
        });
        socket.on("sendMessageTypingStart", memberId => socket.broadcast.emit("receiveMessageTypingStart", memberId));
        socket.on("sendMessageTypingStop", memberId => socket.broadcast.emit("receiveMessageTypingStop", memberId));

        socket.on("connectAll", data => {
            if (data) {
                const groupIds = Object.keys(data);
                for (let i = 0; i < groupIds.length; i++) {
                    const groupId = groupIds[i];
                    socket.join(groupId);
                    console.log(groupId, io.sockets.adapter.rooms[groupId].length);
                    const channelIds = data[groupId];
                    for (let j = 0; j < channelIds.length; j++) {
                        const channelId = channelIds[j];
                        socket.join(channelId);
                        console.log(channelId, io.sockets.adapter.rooms[channelId].length);
                    }
                }
                socket.emit("receiveConnectAll", data);
            }
        })

        socket.on("channel task create", task => {
            
        })
    });
}