const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/user.controller");

router.post("/", authenticateUser);

module.exports = router;