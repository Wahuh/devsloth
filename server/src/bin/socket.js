
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

        socket.on("sendGroupConnect", group => {
            const { _id: groupId, channels: channelIds } = group;
            socket.join(groupId);
            for (let i = 0; i < channelIds.length; i++) {
                socket.join(channelIds[i]);
            }
            socket.emit("receiveGroupConnect", group);
        });


        socket.on("sendMemberChannelJoin", member => emit(receiveMemberChannelJoin(member)));
        socket.on("sendMemberChannelLeave", member => emit(receiveMemberChannelLeave(member)));
        socket.on("sendMemberGroupJoin", member => socket.to(member.group).broadcast.emit("receiveMemberGroupJoin", member));
        socket.on("sendMemberGroupLeave", member => emit(receiveMemberGroupLeave(member)));

        socket.on("sendGroupCreate", () => {});
        socket.on("sendGroupDelete", () => {});
        socket.on("sendGroupUpdate", () => {});
        socket.on("sendGroupMemberLeave", () => {});

        socket.on("sendChannelConnect", channel => {
            const { _id: channelId, group } = channel;
            console.log("channelReceived");
            socket.join(channelId);
            socket.to(group).emit("receiveChannelConnect", channel);
        });
        socket.on("sendChannelCreate", channel => {
            console.log("toCreate", channel);
            socket.to(channel.group).emit("receiveChannelCreate", channel)
            console.log(channel.group, io.sockets.adapter.rooms[channel.group].length);
        }
        );
        socket.on("sendChannelDelete", () => {});
        socket.on("sendChannelUpdate", () => {});
        socket.on("sendChannelMemberJoin", () => {});
        socket.on("sendChannelMemberLeave", () => {});
        socket.on("sendChannelMemberTypingStart", () => {});
        socket.on("sendChannelMemberTypingStop", () => {});

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

        socket.on("groupCreate", ({ channelIds, groupId }) => {
            socket.join(groupId);

            for (let i = 0; i < channelIds.length; i++) {
                socket.join(channelIds[i]);
            }
        });
        socket.on("groupJoin", member => {
            const { group: groupId, channels: channelIds } = member;
            socket.to(groupId).emit("memberJoin", member);

            socket.join(groupId);
            for (let i = 0; i < channelIds.length; i++) {
                socket.join(channelIds[i]);
            }
        });

        socket.on("channel", payload => socket.join(Object.values(payload)[0]));
        socket.on("channelCreate", ({ channelIds }) => {
            for (let i = 0; i < channelIds.length; i++) {
                socket.join(channelIds[i]);
            }
        });

        socket.on("memberJoinedGroup", action => {
            const { payload } = action;
            const { entities, result: memberId} = payload
            const { members } = entities;

            const member = members[memberId];
            const { group: groupId, channels: channelIds } = member;

            console.log("MEMBERJOINED GROUP");
            if (groups.hasOwnProperty(groupId)) {
                if (!groups[groupId].includes(memberId)) {
                    groups[groupId].push(memberId);
                }
            } else {
                groups[groupId] = [memberId];
            }
            socket.join(groupId);
            for (let i = 0; i < channelIds.length; i++) {
                socket.join(channelIds[i]);
            }
            console.log("MEMBER", member);
            console.log(groupId);
            socket.to(groupId).emit("memberJoinedGroup", action);
            //get id of new member, channelIds and groupIds
        });
    });
}