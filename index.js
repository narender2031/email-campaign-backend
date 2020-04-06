const express = require('express');
// Define App with express function
const app = express();

// Route handler
app.get('/', (req, res) => {
  res.send({ 'Hi': 'There' });
})

// Get port dynamically
const PORT = process.env.PORT || 5000;
// Define port
app.listen(PORT);