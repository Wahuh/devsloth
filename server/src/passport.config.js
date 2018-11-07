const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.model");

passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: false,
    },

    async function(email, password, done) {
        try {
            const user = await User.findOne({email});
            if (!user) return done(null, false, {message: "Incorrect username."});
            return done(null, user, {message: "Logged in sucessfully."});
        } catch (err) {
            return done(err);
        }
    }
));

