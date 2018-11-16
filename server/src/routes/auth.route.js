const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/user.controller");
const { wrapAsync } = require("../middleware/async.middleware");

router.post("/", wrapAsync(authenticateUser));

module.exports = router;