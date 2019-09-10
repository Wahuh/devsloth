const express = require('express');
const lists = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");
const { createTask } = require("../../../../controllers/task.controller");
const {
    updateList
} = require("../../../../controllers/list.controller")

lists.post("/:listId/tasks", auth, wrapAsync(createTask))
lists.put("/:listId", auth, wrapAsync(updateList));

module.exports = lists;
