const { Channel, validateChannel } = require("../models/channel.model");
const { Group, validateGroup } = require("../models/group.model");
const { User, validateUser } = require("../models/user.model");
const { Member }  = require("../models/member.model");
const { Role } = require("../models/role.model");
const { Message } = require("../models/message.model");
const clients = require("../clients");

const populate = [
    { 
        path: "channels", 
        populate: [
            { path: "members" },
            { 
                path: "lists",
                populate: { path: "tasks" } 
            }
        ] 
    },
    { path: "members" },
    // { path: "roles" }
];

const createGroup = async (req, res) => {
    const { error } = validateGroup(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.user.id).select("username groups email");
    if (!user) return res.status(404).send("404 User not found");

    const group = new Group({
        name: req.body.name,
        owner: user._id
    });
    
    user.groups.push(group._id);
    await user.save();

    //to ensure all new groups have the "#everyone" channel by default
    const channel = new Channel({
        name: "everyone",
        group: group._id,
        isDefault: true
    });
    await channel.save();

    const member = new Member({
        alias: user.username,
        user: user._id,
        group: group._id,
        channels: [channel._id]
    });
    await member.save();

    const savedGroup = await group.save();
    const groupData = await savedGroup.populate(populate).execPopulate();

    const io = req.app.get("io");
    res.status(200).send(groupData);
    const socket = io.sockets.connected[clients.getClientId(user._id)]
    socket.join(group._id);
    socket.join(channel._id);
    return;
}

const deleteGroup = async (req, res) => {
    const group = await Group.findById(req.params.groupId)
    if (!group) return res.status(404).send("Group not found");
    if (group.owner.equals(req.user.id)) {
        await group.remove();

        return res.status(200).send(group._id);
    }
    return res.status(404).send("You have insufficient permissions");
}

const updateGroup = async (req, res) => {
    const { error } = validateGroup(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const group = await Group.findById(req.params.groupId);
    if (!group) return res.status(404).send("Group not found");

    if (group.owner.equals(req.user.id)) {
        group.set(req.body);

        const updatedGroup = await group.save();
        const io = req.app.get("io");
        io.to(group._id).emit("group update", updatedGroup);
        return res.status(200).end();
    }
    return res.status(404).send("You have insufficient permissions");
}

const joinGroup = async (req, res) => {
    const user = await User.findById(req.user.id).select("groups username");
    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");
    
    let inviteId;
    console.log(req.params);
    if (req.params.id === "global") {
        inviteId = process.env.GLOBAL_GROUP_INVITE_ID;
    } else {
        inviteId = req.params.id;
    }
    const channel = await Channel.findOne({ inviteId });
    console.log(inviteId, channel);
    const group = await Group.findById(channel.group);
    if (!group) return res.status(404).send("Group not found");

    const member = new Member({
        alias: user.username,
        user: user._id,
        group: group._id,
        channels: [channel._id]
    });

    await member.save();

    user.groups.push(group._id);
    await user.save();

    const message = new Message({
        text: `${member.alias} has joined the group.`,
        member: member._id,
        channel: channel._id,
        isNotification: true,
        timestamp: Date.now()
    });

    await message.save();

    const populatedGroup = await Group.findById(group._id)
    .populate(populate);

    const io = req.app.get("io");
    io.to(group._id).emit("group member join", { member, message });
    res.status(201).send(populatedGroup);
    const socket = io.sockets.connected[clients.getClientId(user._id)];
    socket.join(group._id);
    for (let i = 0; i < populatedGroup.channels.length; i++) {
        const channelId = populatedGroup.channels[i]._id;
        socket.join(channelId);
    }
}

const leaveGroup = async (req, res) => {
    console.log(req.params.groupId, "received");
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found");

    const member = await Member.findById(req.params.memberId);
    const defaultChannel = await Group.findById(member.group);

    if (member && member.user.equals(user._id)) {
        const message = new Message({
            text: `${member.alias} has left the group.`,
            member: member._id,
            channel: defaultChannel._id,
            isNotification: true
        });

        await member.remove();
        await user.groups.remove(req.params.groupId);
        await user.save();
        await message.save();

        const io = req.app.get("io");
        const socket = io.sockets.connected[clients.getClientId(user._id)]
        socket.leave(member.group);
        for (let i = 0; i < member.channels; i++) {
            socket.leave(member.channels[i]);
        }

        console.log({ _id: member.group });
        console.log(member, "MEMORYT");
        io.to(member.group).emit("group member leave", { member, message });
        return res.status(200).send({ _id: member.group });
    } else {
        return res.status(404).send("member not found");
    }
}

exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
exports.updateGroup = updateGroup;
exports.joinGroup = joinGroup;
exports.leaveGroup = leaveGroup;