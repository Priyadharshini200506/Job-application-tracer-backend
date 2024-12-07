const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Load the MONGO_URI from environment variables
require('dotenv').config();  // Make sure this is at the top

const mongoURI = process.env.MONGO_URI;

// Debugging: Check if the MONGO_URI is loaded properly
console.log('MongoDB URI:', mongoURI);  // This will show the MongoDB URI or undefined if not loaded

if (!mongoURI) {
  console.error('MongoDB URI not provided!');
  process.exit(1);  // Exit the process if the URI is not available
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('MongoDB Connection Failed:', err);
  });

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
