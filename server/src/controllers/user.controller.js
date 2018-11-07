const User = require("../models/user.model");

module.exports = {
    create: async function createUser() {
        const user = new User({
            name: "thanh"
        });
        const result = await user.save();
        console.log(result);
    },

    getUsers: async function getUsers() {
        const users = await User.find();
        console.log(users);
    }
}
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