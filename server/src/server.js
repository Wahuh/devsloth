const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

require("./bin/env")();
//require("./bin/routes")(app);
require("./bin/db")();

const apiRouter = require("./routes/api");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
app.use("/api", apiRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

const server = http.createServer(app);
const io = socketIo(server);


io.sockets.on("connection", socket => {
    console.log("connection made");
    socket.on("channel", payload => socket.join(Object.values(payload)[0]));
    socket.on("chat", ({ text, channel, user }) => {
        const chatMessage = { 
            text,
            channel,
            user,
            timestamp: Date.now()
        };
        io.to(channel).emit("chat", chatMessage);
    });
    socket.on("typing", alias => socket.broadcast.emit("typing", alias));
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = server;