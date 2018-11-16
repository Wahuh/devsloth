//log db connection using winston
const mongoose = require("mongoose");

module.exports = function() {
    const MONGODB_URI = process.env.MONGODB_URI;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("connected to MongoDB"))
        .catch(err => console.error("Could not connect to MongoDB", err));
    mongoose.Promise = Promise;
    
    const db = mongoose.connection;
    db.on("error", error => console.log(error))
}