const express = require('express');
const login = express.Router();

const { wrapAsync } = require("../../../../middleware/async.middleware");
const { authenticateUser } = require("../../../../controllers/auth.controller");

login.post("/", wrapAsync(authenticateUser));

module.exports = login;
