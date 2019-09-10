const { Channel, validateChannel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
const { Task } = require("../models/task.model");
const { Member }  = require("../models/member.model");
const { User } = require("../models/user.model");
const { listSchema } = require("../models/list.model");
const { Message } = require("../models/message.model");
const clients = require("../clients");


const createChannel = async (req, res) => {
    console.log(req.body);
    const { error } = validateChannel(req.body);
    if (error) return res.status(400).send(error.details[0].message); 

    const group = await Group
    .findById(req.params.groupId);
    if (!group) return res.status(404).send("Group not found");

    const newChannel = await Channel.create({
        name: req.body.name,
        isPublic: req.body.isPublic,
        topic: req.body.topic ? req.body.topic : "",
        group: group._id
    });

    await Member.findOneAndUpdate(
        { user: req.user.id, group: group._id }, 
        { $push: { channels: newChannel._id } }
    );
    
    const channel = await Channel
    .findById(newChannel._id)
    .populate({ path: "members" });

    console.log("created", channel);
    const io = req.app.get("io");
    res.status(201).send(channel);
    const socket = io.sockets.connected[clients.getClientId(req.user.id)];
    socket.join(channel._id);
    return;
}

const deleteChannel = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    const channel = await Channel.findById(req.params.id)
    .populate({ path: "members" });
    if (!channel) return res.status(404).send("Channel not found");

    const group = await Group.findById(channel.group);
    console.log(group.owner, user._id);
    if (group.owner.equals(user._id)) {
        await Channel.findByIdAndRemove(channel._id);
        const conditions = { channels: { $in: channel._id } };
        await Member.update(
            conditions, 
            { $pull: { channels: { $in: channel._id } } }, 
            { multi: true }
        );

        const io = req.app.get("io");
        io.to(group._id).emit("channel delete", channel._id);
        res.status(200).end();
    }
    return res.status(404).send("Insufficient permissions");
}

const updateChannel = async (req, res) => {
    console.log(req.body);
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    const { error } = validateChannel(req.body);
    if (error) return res.status(400).send(error.details[0].message); 

    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).send("Channel not found");

    const group = await Group.findById(channel.group);

    if (group.owner.equals(user._id)) {
        channel.set(req.body);
        const updatedChannel = await channel.save();
        
        // const message = new Message({
        //     text: `${member.alias} has updated the channel topic.`,
        //     member: member._id,
        //     channel: channel._id,
        //     isNotification: true
        // });
    
        // await message.save();

        const io = req.app.get("io");
        io.to(channel._id).emit("channel update", updatedChannel);
        res.status(200).end();
        // .send(updatedChannel);
    }
    return res.status(404).send("Insufficient permissions");
}


const createTask = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(400).send("This channel does not exist.");

    console.log("listId", req.params.listId)
    const list = channel.lists.id(req.params.listId);

    console.log("list", list)
    const task = await Task.create({
        name: req.body.name,
        list: list._id
    });
    list.tasks.push(task._id);
    await channel.save();
    console.log(task);
    return res.status(200).send({ 
        _id: task._id,
        name: task.name,
        list: task.list,
        localId: req.body.localId });
}

exports.createTask = createTask;
exports.createChannel = createChannel;
exports.deleteChannel = deleteChannel;
exports.updateChannel = updateChannel;