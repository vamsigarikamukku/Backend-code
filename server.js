const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const {BusinessData} = require("./Models/BusinessForm")
 
const app = express()
const port = 1234

mongoose.connect("mongodb+srv://vamsigarikamukku0204:newVamsi1234@cluster0.kpm25ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Db Connected...."))
.catch((e)=>console.log(e))

app.use(cors({
     origin: 'http://localhost:5173'
}));

app.use(express.json())

app.use('/auth', require('./Routes/authRoutes'))  

app.listen(port, ()=>console.log(`Server running At ${port}`))