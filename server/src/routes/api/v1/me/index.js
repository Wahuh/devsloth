const express = require('express');
const me = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { 
    getCurrentUser,
    removeUser,
    updateUser
} = require("../../../../controllers/user.controller");
const { createList } = require("../../../../controllers/list.controller");
const { createUserTask } = require("../../../../controllers/task.controller");

me.get("/", auth, wrapAsync(getCurrentUser));
me.delete("/", auth, wrapAsync(removeUser));
me.put("/", auth, wrapAsync(updateUser));
me.post("/lists", auth, wrapAsync(createList))
me.post("/lists/:listId/tasks", auth, wrapAsync(createUserTask));

module.exports = me;
