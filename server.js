const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import routes
const businessForm = require('./Routes/businessForm');
const studentForm = require('./Routes/studentForm');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth/business-form', businessForm);
app.use('/auth/student-form', studentForm); // Corrected the typo

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://vamsigarikamukku0204:newVamsi1234@cluster0.kpm25ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

  