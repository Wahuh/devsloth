const { Channel, validateChannel } = require("../models/channel.model");
const { Group, validateGroup } = require("../models/group.model");
const { User, validateUser } = require("../models/user.model");
const { Member }  = require("../models/member.model");
const { Role } = require("../models/role.model");

const createGroup = async (req, res) => {
    const user = await User.findById(req.user.id).select("username groups email");
    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");

    //validate the group
    const newGroup = new Group({ 
        name: req.body.name,
        owner: user._id
    });
    const group = await newGroup.save();

    //to ensure all groups have the "#everyone" channel by default
    const channel = await Channel.create({ 
        name: "everyone",
        group: group._id,
    });

    await Member.create({
        alias: user.username,
        user: user._id,
        group: group._id,
        channels: [channel._id]
    });

    user.groups.push(group._id);
    await user.save();
    
    const populatedGroup = await Group.findById(group._id)
    .populate(
        [{
            path: "channels",
            populate: { path: "members" }
        },
        { path: "members" }, 
        { path: "roles" }]
    );
    console.log(populatedGroup);
    res.status(201).send(populatedGroup);
}

const deleteGroup = async (req, res) => {
    const user = await User.findById(req.user.id).select("groups");
    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");

    console.log(req.params);
    const group = await Group.findById(req.params.id);
    console.log(group);
    if (!group) return res.status(404).send("Group not found");

    if (group.owner.equals(user._id)) {
        const deletedGroup = await Group.findByIdAndRemove(group._id);
        await Channel.deleteMany({ group: group._id });
        await Member.deleteMany({ group: group._id });
        await Role.deleteMany({ group: group._id });
        await User.findByIdAndUpdate(user._id, 
            { $pull: { groups: { $in: group._id } } }
        );
        console.log(deletedGroup);
        return res.status(200).send({ _id: group._id });
    }
    return res.status(404).send("group not found");

}

exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;