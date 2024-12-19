// File: server.js (Main server file for user authentication and CRUD operations)
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Models
const User = require('./models/User');
const Application = require('./models/Application');

// Routes
const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

app.use('/auth', authRoutes);
app.use('/applications', applicationRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
