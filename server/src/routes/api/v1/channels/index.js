const express = require('express');
const channels = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { createChannel } = require("../../../../controllers/channel.controller");

channels.post("/", auth, wrapAsync(createChannel));

module.exports = channels;
