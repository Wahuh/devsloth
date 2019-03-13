const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Channel } = require("../models/channel.model");
const { Task } = require("../models/task.model");

const listSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
    },
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