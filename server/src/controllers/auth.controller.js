const bcrypt = require('bcrypt');

const { User, validateUser } = require("../models/user.model");
const { Member } = require("../models/member.model");
const { Channel } = require("../models/channel.model");
const { Group } = require("../models/group.model");
require("../models/list.model");
require("../models/task.model");

const registerUserGlobal = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send("This email address has already been registered.")
    
    //add user to a Global group
    const group = await Group.findById(process.env.GLOBAL_GROUP_ID)
    const channel = await Channel.findOne({ 
        group: process.env.GLOBAL_GROUP_ID,
        name: "everyone"
    });


    const user = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        groups: [group._id],
    });

    await Member.create({
        user: user._id,
        channels: [channel._id],
        group: group._id,
        alias: user.username
    });

    const populatedUser = await User
    .findById(user._id)
    .select("-password")
    .populate({
        path: "groups",
        populate: [
            { path: "channels", populate: { path: "members" } },
            { path: "members" },
            { path: "roles" }
        ]
    });
    
    const token = populatedUser.generateAuthToken();
    res
    .header("Authorization", `Bearer ${token}`)
    .header("access-control-expose-headers", "Authorization")
    .send(populatedUser);
};

const registerUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(200).send("This email address has already been registered.")
    
    const user = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    const populatedUser = await User
    .findById(user._id)
    .select("-password")
    .populate(populate);

    const token = populatedUser.generateAuthToken();
    res
    .header("Authorization", `Bearer ${token}`)
    .header("access-control-expose-headers", "Authorization")
    .send(populatedUser);
};

const authenticateUser = async (req, res) => {
    //const { error } = validateUser(req.body);
    //if (error) return res.status(400).send(error.details[0].message);

    const user = await User
    .findOne({ email: req.body.email })
    .populate(populate);

    if (!user) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password");

    const { _id, email, username, groups } = user;
    const token = user.generateAuthToken();
    console.log(user);
    res
    .status(200)
    .header("Authorization", `Bearer ${token}`)
    .header("access-control-expose-headers", "Authorization")
    .send({ _id, email, username, groups });
}

const populate = [
    {
        path: "groups",
        populate: [
            { 
                path: "channels", 
                populate: [
                    { path: "members" },
                    { 
                        path: "lists",
                        populate: { path: "tasks" }
                    }
                ] 
            },
            { path: "members" },
            // { path: "roles" }
        ]
    }, 
    
    { 
        path: "lists",
        populate: { path: "tasks" }
    }
]

exports.authenticateUser = authenticateUser;
exports.registerUser = registerUser;