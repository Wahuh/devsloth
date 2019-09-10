const { Channel, validateChannel } = require("../models/channel.model");
const { Group, validateGroup } = require("../models/group.model");
const { User, validateUser } = require("../models/user.model");
const { Member }  = require("../models/member.model");

const deleteMember = async (req, res) => {
    const user = await User.findById(req.user.id).select("username groups email");
    if (!user) return res.status(404).send("Whoops, we couldn't find the user. Please try logging in again.");

    const member = await Member.findById(req.params.id);
    if (member.user.equals(user._id)) {
        await Member.findByIdAndDelete(member._id);
        return res.status(200).send(member);
    }
    return res.status(404).send("member not found");
}

exports.deleteMember = deleteMember;