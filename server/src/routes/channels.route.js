const express = require("express");
const router = express.Router();

const { createTask, createChannel } = require("../controllers/channel.controller");

//get all channels
router.get("/", (req, res) => {
    res.send("Hello");
});

//get specific channel
router.get("/:id", (req, res) => {
    //get req.body.id
    //findById
    if (!user) res.status(404).send("user not found");
    res.send(req.params.id);
});


//create a new channel
router.post("/", createChannel);

//create a new task for a specific channel
router.post("/:id/tasks", createTask);

//bulk update channels
router.put("/");

//update a specific channel
router.put("/:id");

//partially update a specific channel
router.patch("/:id");

//delete a channel
router.delete("/:id");

module.exports = router;