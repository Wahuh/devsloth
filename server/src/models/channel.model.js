const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChannelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        trim: true,
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
});

module.exports = mongoose.model("Channel", ChannelSchema);