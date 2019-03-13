const express = require('express');
const tasks = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");
const { 
    createTask,
    deleteTask,
    updateTask
} = require("../../../../controllers/task.controller");

tasks.post("/", auth, wrapAsync(createTask));
tasks.delete("/:id", auth, wrapAsync(deleteTask));
tasks.put("/:taskId", auth, wrapAsync(updateTask));

module.exports = tasks;
