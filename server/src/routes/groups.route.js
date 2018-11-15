const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth.middleware");
const { createGroup } = require("../controllers/group.controller");

router.post("/", auth, createGroup);

module.exports = router;