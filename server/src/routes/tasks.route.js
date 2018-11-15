const express = require("express");
const router = express.Router();

//get all tasks
router.get("/tasks", (req, res) => {
    res.send("Hello");
});

//get specific task
router.get("/tasks/:id", (req, res) => {
    if (!user) res.status(404).send("user not found");
    res.send(req.params.id);
});

//create a new task
router.post("/tasks", (req, res) => {

});

//bulk update tasks
router.put("/tasks");

//update a specific task
router.put("/tasks/:id");

//partially update a specific task
router.patch("/tasks/:id");

//delete a task
router.delete("/tasks/:id");

module.exports = router;