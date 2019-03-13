const express = require('express');
const groups = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { 
    createGroup, 
    deleteGroup,
    updateGroup,
    joinGroup,
    leaveGroup
} = require("../../../../controllers/group.controller");

groups.post("/", auth, wrapAsync(createGroup));
groups.post("/join/:id", auth, wrapAsync(joinGroup));
groups.delete("/:groupId/members/:memberId", auth, wrapAsync(leaveGroup));
groups.put("/:groupId", auth, wrapAsync(updateGroup));
groups.delete("/:groupId", auth, wrapAsync(deleteGroup));

module.exports = groups;
