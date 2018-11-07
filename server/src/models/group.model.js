const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        trim: true,
    },
    
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    Channels: [{
        type: Schema.Types.ObjectId,
        ref: "Channel"
    }],
});

module.exports = mongoose.model("Group", GroupSchema);