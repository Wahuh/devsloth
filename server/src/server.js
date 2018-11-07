const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const passport = require("passport");
const http = require("http");
require("./passport.config");

const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://thanh:thebestslacker1@ds131983.mlab.com:31983/slacker";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", error => console.log(error))


//environment variable, process.env.MONGO_ATLAS_PW nodemon

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize())


const group = require("./routes/group.route");
const index = require("./routes/index");
const login = require("./routes/login.route");
const users = require("./routes/users.route");

app.use("/", index);
app.use("/api/groups", group);
app.use("/api", users);
app.use("/api", login);

const server = http.createServer(app)
const io = socketIo(server);

io.on("connection", socket => {
    console.log("new client connected");
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});