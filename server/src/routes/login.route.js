const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = express.Router();

router.post("/login", async (req, res, next) => {
    passport.authenticate("local", {session: false}, (req, res) => {
        
    });
});

module.exports = router;