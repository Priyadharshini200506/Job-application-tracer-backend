const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import database connection

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Make sure this is being called

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Port and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
