const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
// Import routes 
const authRoutes = require('./routes/authRoutes');
const { cookieKey } = require('./config/keys');
// require mongoose
require('./services/mongoose');
// Load the user model
require('./models/user');
// Nothing to assign so we don't need it to create the variable
require('./services/passport');

// Define App with express function
const app = express();

app.use(cookieSession({
  maxAge: 60 * 60 * 1000,
  keys: [cookieKey] 
}))
// Middleware to handle all requests before it goes to routes. 
app.use(passport.initialize());
app.use(passport.session());
// initialize the authRoutes function
authRoutes(app);

// Get port dynamically
const PORT = process.env.PORT || 5000;
// Define port
app.listen(PORT);