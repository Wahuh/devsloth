const { Channel, validateChannel } = require("../models/channel.model");
const { Group, validateGroup } = require("../models/group.model");
const { User, validateUser } = require("../models/user.model");

const createGroup = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    //if user id has been deleted?
    const group = new Group({
        name: req.body.name
    });

    //to ensure all groups have the general channel by default
    const channel = new Channel({
        name: "general"
    });

    user.groups.push(group);
    group.users.push(user);
    group.channels.push(channel);
    channel.group = group;

    await channel.save();
    await group.save();
    await user.save();
    
    res.send("group created");
}

exports.createGroup = createGroup;