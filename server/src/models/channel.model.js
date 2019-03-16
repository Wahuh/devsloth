const mongoose = require("mongoose");
const { Task } = require("../models/task.model");
const { Message } = require("../models/message.model");
const shortid = require("shortid");
const Schema = mongoose.Schema;
const Joi = require("joi");
const { List } = require("../models/list.model");

const channelSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },

    topic: {
        type: String,
        maxlength: 250,
        default: ""
    },

    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },

    isDefault: {
        type: Boolean,
        default: false
    },

    isPublic: {
        type: Boolean,
        default: true
    },

    inviteId: {
        type: String,
        unique: true,
        default: shortid.generate
    },
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

channelSchema.pre("remove", async function(next) {
    const channel = this;
    await Task.deleteMany({ channel: channel._id });
    await Message.deleteMany({ channel: channel._id });
    await List.deleteMany({ channel: channel._id });
    next();
});

channelSchema.virtual("members", {
    ref: "Member",
    localField: "_id",
    foreignField: "channels"
});

channelSchema.virtual("lists", {
    ref: "List",
    localField: "_id",
    foreignField: "channel"
});

function validateChannel(channel) {
    const schema = {
        name: Joi.string().min(1).required(),
        topic: Joi.string().max(250),
        isPublic: Joi.boolean(),
    }
    return Joi.validate(channel, schema);
}

exports.Channel = mongoose.model("Channel", channelSchema);
exports.validateChannel = validateChannel;