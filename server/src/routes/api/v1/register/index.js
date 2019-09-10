const express = require('express');
const register = express.Router();

const { wrapAsync } = require("../../../../middleware/async.middleware");
const { registerUser } = require("../../../../controllers/auth.controller");

register.post("/", wrapAsync(registerUser));

module.exports = register;
