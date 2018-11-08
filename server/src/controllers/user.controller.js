const { User, validate } = require("../models/user.model");

const register = async (req, res) => {
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
        res.header("x-auth-token", token).send({ id, email });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const authenticate = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) return res.status(400).send("Invalid email or password");
    const validPassword = existingUser.validatePassword();
    if (!validPassword) return res.status(400).send("Invalid email or password");

    const token = existingUser.generateAuthToken();
    res.send(token);
};

const update = async (req, res) => {
};

exports.registerUser = register;
exports.authenticateUser = authenticate;

// module.exports = {
//     registerUser: register,

//     create: async function createUser() {
//         const user = new User({
//             name: "thanh"
//         });
//         const result = await user.save();
//         console.log(result);
//     },

//     getUsers: async function getUsers() {
//         const users = await User.find();
//         console.log(users);
//     }
// }
//{user: "THanh"} filter groups by user
//complex query
//.find().limit(10).sort({ name: 1}) 1 asc, -1 desc
//operators eq (equal)
//ne (not equal)
//gt (greater than)]
//gte (greater than or equal to)
//lt (less than)
//in
//nin (not in)
//.find().populate() second argument specifiy proprties that you want to include 