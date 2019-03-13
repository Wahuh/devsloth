const mongoose = require("mongoose");
const { Member } = require("../models/member.model");
const { Channel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
const Schema = mongoose.Schema;
const Joi = require("joi");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        minlength: 5,
        maxlength: 255,
        unique: true,
        trim: true,
    },

    username: {
        type: String,
        required: [true, "username is required"],
        minlength: 1,
        maxlength: 255,
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: "Group"
    }],
});

function validateUser(user) {
    const schema = {
        email: Joi.string().email({ minDomainAtoms: 2}).min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(1).max(255).required(),
    };
    return Joi.validate(user, schema);
}

userSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
});

userSchema.pre("remove", async function(next) {
    const user = this;
    await Group.deleteMany({ owner: user._id });
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.validatePassword = async function(password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare
}

exports.User = mongoose.model("User", userSchema);
exports.validateUser = validateUser;