const mongoose = require("mongoose");
const Schema = mongoose.Schema()
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const User = mongoose.model("User", new Schema({
    username: {
        type: String, 
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
    },
    email: {
        type: String,
        required: [true, "must have an email address"],
        minlength: 5,
        maxlength: 255,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    alias: {
        type: String,
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: "Group"
    }],
}));

function validateUser(user) {
    
}


UserSchema.pre("save", async function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    const hash = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
    user.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

module.exports = User;