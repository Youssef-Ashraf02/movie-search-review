const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        async (username, password, done) => {
            try {
                // Find user by username
                const user = await User.findOne({ UserName: username }).exec();
                if (!user) {
                    return done(null, false, { message: 'No user with that username' });
                }

                // Check password
                if (user.Password !== password) {
                    return done(null, false, { message: 'Password incorrect' });
                }

                // Authentication successful
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            // Find user by ID
            const user = await User.findById(id).exec();
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};
