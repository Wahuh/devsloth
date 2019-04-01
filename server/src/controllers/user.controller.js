const { User, validateUser } = require("../models/user.model");
const { Member } = require("../models/member.model");
const { Channel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
require("../models/task.model");
const bcrypt = require('bcrypt');

const populate = [
    {
        path: "groups",
        populate: [
            { 
                path: "channels", 
                populate: [
                    { path: "members" },
                    { 
                        path: "lists",
                        populate: { path: "tasks" }
                    },
                    { 
                        path: "messages", 
                        options: { 
                            sort: { timestamp: -1 },
                            limit: 10
                        } 
                    },
                ] 
            },
            { path: "members" },
            // { path: "roles" }
        ]
    }, 
    
    { 
        path: "lists",
        populate: { path: "tasks" }
    }
]

const getCurrentUser = async (req, res) => {
    const user = await User
    .findById(req.user.id)
    .select("-password")
    .populate(populate);

    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");
    res.status(200).send(user);
};

const removeUser = async (req, res) => {
    const user = await User.findById({ _id: req.user.id });
    await user.remove();
    await Member.deleteMany({ user: req.user.id });
    //delete all groups that a user owns if they are the only one?
    if (user) return res.status(200).send(user._id);
    else return res.status(404).send("User not found");
}

const updateUser = async (req, res) => {
    const { body } = req;

    if (body.newPassword && !body.currentPassword) return res.status(404).send("Invalid password");

    const user = await User
        .findById(req.user.id)
        .select("password username email");
    if (!user) return res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(body.currentPassword, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");

    user.email = body.email;
    user.username = body.username;
    if (body.newPassword) {
        user.password = body.newPassword;
    }

    await user.save();
    const { email, username, _id } = user;
    res.status(200).send({ email, username, _id });
}

exports.getCurrentUser = getCurrentUser;
exports.removeUser = removeUser;
exports.updateUser = updateUser;