const { error } = require('dotenv').config();
if (error) {
    throw error;
    //process.exit(1);
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors");


const app = express();
const port = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", error => console.log(error))


//environment variable, process.env.MONGO_ATLAS_PW nodemon

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

const index = require("./routes/index");
const register = require("./routes/register.route");
const auth = require("./routes/auth.route");
const group = require("./routes/groups.route");
const channels = require("./routes/channels.route")
const users = require("./routes/users.route");

app.use("/", index);
app.use("/api/auth", auth);
app.use("/api/register", register);
app.use("/api/groups", group);
app.use("/api/channels", channels);
app.use("/api/users", users);

const server = http.createServer(app)
const io = socketIo(server);

io.on("connection", socket => {
    console.log("new client connected");
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});