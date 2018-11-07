const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        confirmation: "success",
        data: "this is the group endpoint",
        user: req.user,
        token: req.query.secret_token,
    });
})

module.exports = router;