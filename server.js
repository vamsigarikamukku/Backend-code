const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

// Load environment variables from .env file
dotenv.config();

/// Use CORS middleware
app.use(cors());

// Or you can configure it more specifically
app.use(cors({
  origin: 'https://jestdevelopers.in', // Allow only this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());

// Your other routes and middleware
app.use('/auth/business-form', require('./Routes/businessForm'))
app.use('/auth/student-form', require('./Routes/studentForm'));

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

  