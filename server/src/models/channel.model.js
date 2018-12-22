const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const channelSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },

    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

channelSchema.virtual("members", {
    ref: "Member",
    localField: "_id",
    foreignField: "channels"
});

channelSchema.virtual("tasks", {
    ref: "Task",
    localField: "_id",
    foreignField: "channel"
});

function validateChannel(channel) {
    const schema = {
        name: Joi.string().required(),
        //users:
    }
    return Joi.validate(channel, schema);
}

exports.Channel = mongoose.model("Channel", channelSchema);
exports.validateChannel = validateChannel;