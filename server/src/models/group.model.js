const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const groupSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    channels: [{
        type: Schema.Types.ObjectId,
        ref: "Channel"
    }],
});

function validateGroup(group) {
    const schema = {
        name: Joi.string().required(),
        //users:
    }
}

exports.Group = mongoose.model("Group", groupSchema);
exports.validate = validateGroup;