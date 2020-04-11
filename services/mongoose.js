const mongoose = require('mongoose');
const { mongoURI} = require('../config/keys');

// Connecting to mongoDB instance
mongoose.connect(mongoURI);