const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, "Group Name is required"],
        trim: true,
    },

    next: {
        type: Schema.Types.ObjectId,
        ref: "Task",
        default: null
    },

    description: {
        type: String,
        trim: true,
    },

    isHead: {
        type: Boolean,
        default: false
    },
    
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    list: {
        type: Schema.Types.ObjectId,
        ref: "List"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
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

function validateTask(task) {
    const schema = {
        name: Joi.string().required(),
        //users:
    }
    return Joi.validate(task, schema);
}

exports.taskSchema = taskSchema;
exports.Task = mongoose.model("Task", taskSchema);
exports.validateTask = validateTask;