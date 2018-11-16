const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

require("./bin/env")();
require("./bin/routes")(app);
require("./bin/db")();

const server = http.createServer(app)
const io = socketIo(server);

// io.on("connection", socket => {
//     console.log("new client connected");
// })
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});