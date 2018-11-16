const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth.middleware");
const { createGroup } = require("../controllers/group.controller");
const { wrapAsync } = require("../middleware/async.middleware");

router.post("/", auth, wrapAsync(createGroup));

module.exports = router;