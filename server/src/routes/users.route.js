const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth.middleware");
const { getCurrentUser } = require("../controllers/user.controller");

//get the current user
router.get("/me", auth, getCurrentUser);

//add a group for the current user
router.post("/me/groups", auth, );

//get all users
router.get("/users", (req, res) => {
    res.send("Hello");
});

//get specific user
router.get("/users/:id", (req, res) => {
    if (!user) res.status(404).send("user not found");
    res.send(req.params.id);
});

//get all groups for a specific user
router.get("/users/:id/groups", (req, res) => {

});

//create a new user
router.post("/users", (req, res) => {

});

//bulk update users
router.put("/users");

//update a specific user
router.put("/users/:id");

//bulk update groups for a specific user
router.put("/users/:id/groups");

//partially update a specific user
router.patch("/users/:id");

//delete a user
router.delete("/users/:id");

module.exports = router;