const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: false,
    },

    function(email, password, done) {
        
    }
));