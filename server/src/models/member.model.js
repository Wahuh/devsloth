const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    alias: {
        type: String,
        maxlength: 255,
        required: true
    },

    channels: [{
        type: Schema.Types.ObjectId,
        ref: "Channel"
    }],

    group: {
        type: Schema.Types.ObjectId,
        ref: "Group",
    },

    role: {
        type: Schema.Types.ObjectId,
        ref: "Role"  
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

exports.Member = mongoose.model("Member", memberSchema);