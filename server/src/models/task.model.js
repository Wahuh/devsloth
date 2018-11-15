const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const taskSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
});

function validateTask(task) {
    const schema = {
        name: Joi.string().required(),
        //users:
    }
    return Joi.validate(task, schema);
}

exports.Task = mongoose.model("Task", taskSchema);
exports.validateTask = validateTask;