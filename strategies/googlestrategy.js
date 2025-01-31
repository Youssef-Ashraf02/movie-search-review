const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/users'); // Adjust the path to your User model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in the database
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        // User exists, pass the user to the done callback
        return done(null, user);
      }

      // User does not exist, create a new user
      user = new User({
        googleId: profile.id,
        Email: profile.emails[0].value // Adjust this based on your User schema
        // You may want to add additional user information here
      });

      await user.save();
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
