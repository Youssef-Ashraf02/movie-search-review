const User = require('../models/users');
const passport = require('passport');


const renderSignUpPage = (req, res) => {
    res.render('SignUp');
};


const renderLoginPage = (req, res) => {
    res.render('login');
};


const logout = (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).send('Could not log out.');
        }
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Could not log out.');
            }
            res.redirect('/');
        });
    });
};


const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login?loginFailed=true');
        }
        req.login(user, err => {
            if (err) {
                return next(err);
            }
            req.session.userId = user._id;
            req.session.username = user.UserName;
            return res.redirect('/');
        });
    })(req, res, next);
};


const signUp = async (req, res) => {
    try {
        const existingUser = await User.findOne({ UserName: req.body.UserName });
        if (existingUser) {
            return res.redirect('/SignUp?usernameExists=true');
        }
        
        const user = new User(req.body);
        await user.save();


        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Check if username exists during sign-up
const checkUsernameExists = (req, res) => {
    const usernameExists = req.query.usernameExists === 'true';
    res.render('SignUp', { usernameExists });
};

// Handle Google login success (callback from Google)
const googleLoginSuccess = (req, res) => {
    // After Google authentication, user is added to the session
    if (req.user) {
        req.session.userId = req.user._id;
        req.session.username = req.user.UserName; 
        return res.redirect('/');
    }
    res.redirect('/login'); 
};

module.exports = {
    checkUsernameExists,
    signUp,
    login,
    logout,
    renderLoginPage,
    renderSignUpPage,
    googleLoginSuccess 
};
