const auth = require("../routes/auth.route");
const channels = require("../routes/channels.route")
const group = require("../routes/groups.route");
const register = require("../routes/register.route");
const users = require("../routes/users.route");
const { handleError } = require("../middleware/error.middleware");
//express.json?

module.exports = function(app) {
    app.use("/api/auth", auth);
    app.use("/api/channels", channels);
    app.use("/api/groups", group);
    app.use("/api/register", register);
    app.use("/api/users", users);
    app.use(handleError);
}