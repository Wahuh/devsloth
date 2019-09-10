const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Channel } = require("../models/channel.model");
const { Task } = require("../models/task.model");
const { User } = require("./user.model");

const listSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
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
    },
    id: false
});


listSchema.virtual("tasks", {
    ref: "Task",
    localField: "_id",
    foreignField: "list"
});

exports.List = mongoose.model("List", listSchema);