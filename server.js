const express = require('express');
const mongoose = require('mongoose');
const businessFormRoute = require('./routes/businessForm');
const studentFormRoute = require('./routes/studentForm');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://vamsigarikamukku0204:newVamsi1234@cluster0.kpm25ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('DB connected'))
.catch((err) => console.error('DB connection error:', err))

app.use('/auth', businessFormRoute);
app.use('/auth', studentFormRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
