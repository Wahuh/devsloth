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
    
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }],
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