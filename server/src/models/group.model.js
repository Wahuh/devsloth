const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;
const Joi = require("joi");

const groupSchema = new Schema({
    name: {
        type: String,
        required: [true, "Group Name is required"],
        minlength: 2,
        maxlength: 100,
        trim: true,
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "Member"
    },

    inviteId: {
        type: String,
        unique: true,
        default: shortid.generate
    }

}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

groupSchema.virtual("channels", {
    ref: "Channel",
    localField: "_id",
    foreignField: "group"
});

groupSchema.virtual("members", {
    ref: "Member",
    localField: "_id",
    foreignField: "group"
});

groupSchema.virtual("roles", {
    ref: "Role",
    localField: "_id",
    foreignField: "group"
});


function validateGroup(group) {
    const schema = {
        name: Joi.string().required(),
        //users:
    }
}

exports.Group = mongoose.model("Group", groupSchema);
exports.validateGroup = validateGroup;