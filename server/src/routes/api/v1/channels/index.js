const express = require('express');
const channels = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { 
    createChannel, 
    deleteChannel, 
    updateChannel,
    createTask
} = require("../../../../controllers/channel.controller");
const { createList } = require("../../../../controllers/list.controller");

channels.post("/:groupId", auth, wrapAsync(createChannel));
channels.put("/:id", auth, wrapAsync(updateChannel));
channels.delete("/:id", auth, wrapAsync(deleteChannel));

channels.post("/:channelId/lists", auth, wrapAsync(createList));
channels.post("/:id/lists/:listId/tasks", auth, wrapAsync(createTask));

module.exports = channels;
