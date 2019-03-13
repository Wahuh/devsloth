const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        default: Date.now()
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