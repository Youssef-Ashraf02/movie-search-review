const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const crypto = require('crypto');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const path = require('path');
const app = express();

// Passport config
require('./strategies/localstrategy')(passport);  // Path to your local strategy
require('./strategies/googlestrategy'); 

// Static files
app.use(express.static("views")); 

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set view engine
app.set('view engine', 'ejs');

// Routes
const watchlistRoutes = require('./routes/watchlistRoutes');
const ratingsRoutes = require('./routes/ratingsRoutes');
const userRoutes = require('./routes/userRoutes');
//const googleuserRoutes = require('./routes/googleuserRoutes'); 

// Connect to MongoDB
const ConnectionString = process.env.MONGO_URI;

mongoose.connect(ConnectionString)
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    },
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());  // Persistent login sessions

// Home route
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated:', req.user); // The user object should be here
        console.log('User session on home page:', req.session.userId);
        res.render("home", {
            user: req.user, // Pass the user object to the template
            session: req.session // Also pass the session if needed
        });
    } else {
        res.redirect('/login'); // If not authenticated, redirect to login
    }
});
app.get('/home.html', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated:', req.user); // The user object should be here
        console.log('User session on home page:', req.session.userId);
        res.render("home", {
            user: req.user, // Pass the user object to the template
            session: req.session // Also pass the session if needed
        });
    } else {
        res.redirect('/login'); // If not authenticated, redirect to login
    }
});
app.get('/home', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated:', req.user); // The user object should be here
        console.log('User session on home page:', req.session.userId);
        res.render("home", {
            user: req.user, // Pass the user object to the template
            session: req.session // Also pass the session if needed
        });
    } else {
        res.redirect('/login'); // If not authenticated, redirect to login
    }
});

app.get('/MoviePage.html', (req, res) => {
    res.render("MoviePage");
});

app.get('/artist.html', (req, res) => {
    res.render("artist");
});

app.get('/AboutUs', (req, res) => {
    res.render("AboutUs");
});

// Use routes
app.use(userRoutes);
app.use(watchlistRoutes);
app.use(ratingsRoutes);
// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
