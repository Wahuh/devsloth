const express = require('express');
const register = express.Router();

const { wrapAsync } = require("../../middleware/async.middleware");
const { 
    registerUser,
    registerUserWithoutGlobalGroup
} = require("../../controllers/auth.controller");

register.post("/", wrapAsync(registerUser));
register.post("/no-global", wrapAsync(registerUserWithoutGlobalGroup))

module.exports = register;
