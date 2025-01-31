
const express = require("express");
const router = express.Router();
const passport = require('passport');
const usercontroller = require('../controllers/usercontroller');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // Request profile and email scopes
}));

router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    usercontroller.googleLoginSuccess // Handle successful Google login
);

router.get('/SignUp.html', usercontroller.renderSignUpPage);

router.get('/login', usercontroller.renderLoginPage);

router.get('/logout', usercontroller.logout);

router.post('/login', usercontroller.login);

router.get('/SignUp', usercontroller.checkUsernameExists);

router.post('/signup', usercontroller.signUp);

module.exports = router;
