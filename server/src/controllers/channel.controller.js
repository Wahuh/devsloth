const { Channel, validateChannel } = require("../models/channel.model");
const { Group, validateGroup } = require("../models/group.model");
const { Task, validateTask } = require("../models/task.model");
const { Member }  = require("../models/member.model");
const { User } = require("../models/user.model");

const createTask = async (req, res, next) => {
    //validate req.params.id
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(400).send("This channel does not exist.");

    const task = new Task({
        name: req.body.name
    });

    console.log(task.id);
    try {
        channel.tasks.push(task);
        await task.save();
        await channel.save();
        res.send("task created");
    } catch (err) {
        next(err);
    }
}

const createChannel = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    const group = await Group
    .findById(req.body.groupId);
    if (!group) return res.status(404).send("We couldn't find the group");

    const newChannel = await Channel.create({
        name: req.body.name,
        group: group._id
    });

    await Member.findOneAndUpdate(
        { user: user._id, group: group._id }, 
        { $push: { channels: newChannel._id } }
    );
    
    const channel = await Channel
    .findById(newChannel._id)
    .populate({ path: "members" });

    console.log("created", channel);
    res.status(201).send(channel);
}

exports.createTask = createTask;
exports.createChannel = createChannel;