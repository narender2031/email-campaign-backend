/*
  Use of the mongoose will not allow you to create the the dynamic field in the table
  It always require you to create the schema. 
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String
})

// Define the model 1st argument is name of the model, 2nd argument is the schema
mongoose.model('users', userSchema);