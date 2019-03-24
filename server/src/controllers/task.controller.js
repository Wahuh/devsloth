const { Task, validateTask } = require("../models/task.model");
const { Channel, validateChannel } = require("../models/channel.model");
const { List } = require("../models/list.model");
const clients = require("../clients");
const createTask = async (req, res) => {
    const list = await List.findById(req.params.listId);
    console.log(req.params.listId);
    if (!list) return res.status(404).send("List not found");

    const task = new Task({
        list: list._id,
        name: req.body.name,
        channel: list.channel,
    });

    if (req.body.prev) {
        await Task.findByIdAndUpdate(req.body.prev, { $set: { next: task._id } });
    } else {
        task.isHead = true;
    }

    const { 
        _id,
        name,
        next,
        description,
        isHead,
        members,
        list: listId,
        channel
    } = await task.save();

    const io = req.app.get("io");
    io.to(list.channel).emit("channel task create", {
        _id,
        prev: req.body.prev,
        name,
        next,
        description,
        isHead,
        members,
        list: listId,
        channel
    });
    res.status(200).end();
}

const createUserTask = async (req, res) => {
    const list = await List.findById(req.params.listId);
    console.log(req.params.listId, "IDEEE");
    if (!list) return res.status(404).send("List not found");

    const task = new Task({
        list: list._id,
        name: req.body.name,
        user: req.user.id,
    });


    if (req.body.prev) {
        await Task.findByIdAndUpdate(req.body.prev, { $set: { next: task._id } });
    } else {
        task.isHead = true;
    }

    const { 
        _id,
        name,
        next,
        description,
        isHead,
        members,
        list: listId,
        user
    } = await task.save();

    const io = req.app.get("io");
    const socketId = clients.getClientId(req.user.id)
    console.log("sending task", task);
    io.to(socketId).emit("user task create", {
        _id,
        prev: req.body.prev,
        name,
        next,
        description,
        isHead,
        members,
        list: listId,
        user
    });
    res.status(200).end();
}

const deleteTask = async (req, res) => {

}

const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).send("Task not found");
    task.set(req.body);
    const updatedTask = await task.save();
    const io = req.app.get("io");
    io.to(task.channel).emit("channel task update", updatedTask);
    res.status(200).end();
}


exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.createUserTask = createUserTask;