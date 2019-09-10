const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const permissionsList = require("../permissions");

const roleSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },

    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },

    permissions: [{
        type: String,
        enum: permissionsList
    }]
});

exports.Role = mongoose.model("Role", roleSchema);