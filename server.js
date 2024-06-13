const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const {BusinessData} = require("./Models/BusinessForm")
 
const app = express()
const port = 1234

mongoose.connect("mongodb+srv://vamsigarikamukku0204:newVamsi1234@cluster0.kpm25ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Db Connected...."))
.catch((e)=>console.log(e))

const corsOptions = {
     origin: ['http://localhost:5173', 'https://jestdevelopers.in'],
     optionsSuccessStatus: 200
 };
 
 app.use(cors(corsOptions));
 
 app.get('/', (req, res) => {
     res.send('Hello World!');
 });

app.use('/auth', require('./Routes/authRoutes'))  

app.listen(port, ()=>console.log(`Server running At ${port}`))