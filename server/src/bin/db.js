//log db connection using winston
const mongoose = require("mongoose");

module.exports = function() {
    let MONGODB_URI; 
    process.env.NODE_ENV === "test" ? 
    MONGODB_URI = process.env.TEST_MONGODB_URI : MONGODB_URI = process.env.MONGODB_URI;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("connected to MongoDB", MONGODB_URI))
        .catch(err => console.error("Could not connect to MongoDB", err));
    mongoose.Promise = Promise;
    
    const db = mongoose.connection;
    db.on("error", error => console.log(error))
}