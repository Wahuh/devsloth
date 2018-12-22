const express = require('express');
const groups = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { createGroup, deleteGroup } = require("../../../../controllers/group.controller");

groups.post("/", auth, wrapAsync(createGroup));
groups.delete("/:id", auth, wrapAsync(deleteGroup));

module.exports = groups;
