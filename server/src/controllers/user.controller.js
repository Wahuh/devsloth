const { User, validateUser } = require("../models/user.model");
const { Channel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
require("../models/task.model");

const getCurrentUser = async (req, res) => {
    const user = await User
    .findById(req.user.id)
    .select("-password")
    .populate({
        path: "groups",
        populate: [
            { path: "channels", populate: { path: "members" } },
            { path: "members" },
            { path: "roles" }
        ]
    });

    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");
    res.status(200).send(user);
};

const removeUser = async (req, res) => {
    const user = await User.findOneAndDelete({ _id: req.user.id });
    if (user) return res.status(200).send(user._id);
    else return res.status(404).send("User not found");
}

const updateUser = async (req, res) => {
    const { body } = req;
    const { email } = body;

    const user = await User.findByIdAndUpdate(req.user.id, {
        $set: { email: email }
    });
    res.status(200).send(user);
}

exports.getCurrentUser = getCurrentUser;
exports.removeUser = removeUser;
exports.updateUser = updateUser;