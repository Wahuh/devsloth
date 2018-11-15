const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth.middleware");

router.post("/", auth, (req, res, next) => {
    res.json({
        confirmation: "success",
        data: "this is the group endpoint",
        user: req.user,
        token: req.query.secret_token,
    });
})

module.exports = router;