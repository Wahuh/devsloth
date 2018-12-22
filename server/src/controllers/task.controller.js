const { Task, validateTask } = require("../models/task.model");
const { Channel, validateChannel } = require("../models/channel.model");

const createTask = async (req, res) => {
    //validate req.params.id
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(400).send("This channel does not exist.");

    const task = new Task({
        name: req.body.name
    });

    channel.tasks.push(task);
    task.channel = channel;
    await task.save();
    await channel.save();
    const { _id, name } = task;
    res.status(201).send({ _id, name });
}

exports.createTask = createTask;