const { Task, validateTask } = require("../models/task.model");
const { Channel, validateChannel } = require("../models/channel.model");

const createTask = async (req, res) => {
    //validate req.params.id
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(400).send("This channel does not exist.");

    const task = new Task({
        name: req.body.name
    });

    try {
        channel.tasks.push(task);
        task.channel = channel;
        await task.save();
        await channel.save();
        res.send("task created");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.createTask = createTask;