const express = require('express');
const v1 = express.Router();

const channelsRouter = require("./channels");
const groupsRouter = require("./groups");
const inviteRouter = require("./invite");
const listsRouter = require("./lists");
const loginRouter = require("./login");
const meRouter = require("./me");
const membersRouter = require("./members");
const registerRouter = require("./register");
const tasksRouter = require("./tasks");

v1.use("/channels", channelsRouter);
v1.use("/groups", groupsRouter);
v1.use("/invite", inviteRouter);
v1.use("/lists", listsRouter);
v1.use("/login", loginRouter);
v1.use("/me", meRouter);
v1.use("/members", membersRouter);
v1.use("/register", registerRouter);
v1.use("/tasks", tasksRouter);

module.exports = v1;
