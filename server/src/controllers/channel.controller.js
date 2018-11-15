const { Channel, validateChannel } = require("../models/channel.model");
const { Task, validateTask } = require("../models/task.model");

const createTask = async (req, res) => {
    //validate req.params.id
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(400).send("This channel does not exist.");

    const task = new Task({
        name: req.body.name
    });

    console.log(task.id);
    try {
        channel.tasks.push(task);
        await task.save();
        await channel.save();
        res.send("task created");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const createChannel = async (req, res) => {
    console.log(req.body);
    const channel = new Channel({
        name: req.body.name
    });

    try {
        await channel.save();
        res.send("success");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const register = async (req, res) => {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //validate the request data return 400 error
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send("This email address has already been registered.")
    
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        const { _id: id, email } = user;
        const token = user.generateAuthToken();
        res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send({ id, email });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.createTask = createTask;
exports.createChannel = createChannel;