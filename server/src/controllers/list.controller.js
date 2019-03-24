const { Channel, validateChannel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
const { Task } = require("../models/task.model");
const { Member }  = require("../models/member.model");
const { User } = require("../models/user.model");
const { Message } = require("../models/message.model");
const { List } = require("../models/list.model");
const clients = require("../clients");

const createList = async (req, res) => {
    if (req.params.channelId) {
        const channel = await Channel.findById(req.params.channelId);
        if (!channel) return res.status(404).send("Channel not found");
        console.log(req.params.channelId);
        // const member = await Member.findOne({ user: req.user.id  });
        // if (!member) return res.status(404).send("Member not found");
        const list = new List({
            name: req.body.name,
            channel: channel._id
        });
        await list.save();
    
        // const message = new Message({
        //     text: `${member.alias} has created the list - ${list.name}.`,
        //     member: member._id,
        //     channel: channel._id,
        //     isNotification: true
        // });
        // await message.save();
        const io = req.app.get("io");
        io.to(channel._id).emit("channel list create", list);
        return res.status(200).end();
    } else {
        console.log("creating?", req.user.id);
        //create a list for the user
        const list = new List({
            name: req.body.name,
            user: req.user.id
        });
        await list.save();
        const io = req.app.get("io");
        const socketId = clients.getClientId(req.user.id);
        io.to(socketId).emit("user list create", list);
        return res.status(200).end();
    }
}

const updateList = async (req, res) => {
    const list = await List.findById(req.params.listId);
    if (!list) return res.status(404).send("List not found");
    list.set(req.body);
    const updatedList = await list.save();

    const io = req.app.get("io");
    io.to(list.channel).emit("channel list update", updatedList);
    return res.status(200).end();
}

exports.createList = createList;
exports.updateList = updateList;