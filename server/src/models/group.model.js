const mongoose = require("mongoose");
const { Member } = require("../models/member.model");
const { Channel } = require("../models/channel.model");
const { User } = require("../models/user.model");
const shortid = require("shortid");
const Schema = mongoose.Schema;
const Joi = require("joi");

const groupSchema = new Schema({
    name: {
        type: String,
        required: [true, "Group Name is required"],
        minlength: 2,
        maxlength: 100,
        trim: true,
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // inviteId: {
    //     type: String,
    //     unique: true,
    //     default: shortid.generate
    // }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

groupSchema.pre("remove", async function(next) {
    const group = this;
    await Channel.deleteMany({ group: group._id });
    await Member.deleteMany({ group: group._id });
    await User.updateMany({ groups: group._id }, { $pull: { groups: { $in: group._id } } });
    next();
});

groupSchema.virtual("channels", {
    ref: "Channel",
    localField: "_id",
    foreignField: "group"
});

groupSchema.virtual("members", {
    ref: "Member",
    localField: "_id",
    foreignField: "group"
});

groupSchema.virtual("roles", {
    ref: "Role",
    localField: "_id",
    foreignField: "group"
});


function validateGroup(group) {
    const schema = {
        name: Joi.string().required().min(2).max(100),
    }
    return Joi.validate(group, schema);
}

exports.Group = mongoose.model("Group", groupSchema);
exports.validateGroup = validateGroup;