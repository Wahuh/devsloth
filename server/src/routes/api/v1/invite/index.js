const express = require('express');
const invite = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");
const { joinGroup } = require("../../../../controllers/group.controller");

invite.post("/:id", auth, wrapAsync(joinGroup));

module.exports = invite;
