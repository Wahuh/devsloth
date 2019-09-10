const express = require('express');
const members = express.Router();

const { wrapAsync } = require("../../../../middleware/async.middleware");
const { deleteMember } = require("../../../../controllers/member.controller");

members.delete("/:id", wrapAsync(deleteMember));

module.exports = members;
