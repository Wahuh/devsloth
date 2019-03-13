const express = require('express');
const me = express.Router();

const { auth } = require("../../../../middleware/auth.middleware");
const { wrapAsync } = require("../../../../middleware/async.middleware");

const { 
    getCurrentUser,
    removeUser,
    updateUser
} = require("../../../../controllers/user.controller");

me.get("/", auth, wrapAsync(getCurrentUser));
me.delete("/", auth, wrapAsync(removeUser));
me.put("/", auth, wrapAsync(updateUser));

module.exports = me;
