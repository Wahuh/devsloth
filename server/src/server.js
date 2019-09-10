const app = require("./app");
const socketIo = require("socket.io");

const server = app.listen(process.env.PORT);
const io = socketIo(server);
require("./bin/socket")(io);
app.set("io", io);