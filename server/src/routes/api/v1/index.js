const express = require('express');
const v1 = express.Router();
const groupsRouter = require("./groups");
const channelsRouter = require("./channels");
const meRouter = require("./me");

v1.use("/groups", groupsRouter);
v1.use("/channels", channelsRouter);
v1.use("/me", meRouter);

module.exports = v1;
