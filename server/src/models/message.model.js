const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Channel } = require("./channel.model");
const { Member } = require("./member.model");
const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },

    isNotification: {
        type: Boolean,
        default: false
    },

    timestamp: {
        type: Date,
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref: "Channel",
    },

    member: {
        type: Schema.Types.ObjectId,
        ref: "Member"
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
}, { timestamps: true });

exports.Message = mongoose.model("Message", messageSchema);