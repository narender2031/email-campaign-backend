const express = require('express');
// Import routes 
const authRoutes = require('./routes/authRoutes');
// Nothing to assign so we don't need it to create the variable
require('./services/passport');

// Define App with express function
const app = express();

// initialize the authRoutes function
authRoutes(app);

// Get port dynamically
const PORT = process.env.PORT || 5000;
// Define port
app.listen(PORT);