const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientId, googleClientSecret } = require('./config/keys');
// Define App with express function
const app = express();

// passport auth
passport.use(new GoogleStrategy({
  clientID: googleClientId,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => { console.log({accessToken: accessToken, refreshToken: refreshToken, profile: profile, done: done}) }));


// Route handler

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}))


app.get('/auth/google/callback', passport.authenticate('google'))

// Get port dynamically
const PORT = process.env.PORT || 5000;
// Define port
app.listen(PORT);