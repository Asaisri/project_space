const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');     
const cors = require('cors');             
// const usrform =require('./models/userform.js');
// const nodemailer=require('nodemailer');
const UserRouter = require('./src/routes/userRoutes'); 
const app = express();
app.use(bodyParser.json()) //frontend data from the formdata by using parsing with json format
app.use(cors())  // network accessing , to prevent http requests cors is 
app.use(express.json())
app.use('/',UserRouter);
mongoose.connect('mongodb+srv://Saisri987:lc9Ee0rRGeFNYx8k@cluster0.f7myt5k.mongodb.net/Cluster0?retryWrites=true&w=majority')
// req is request for frontend, res is response of backend
.then(()=>app.listen(5005))
.then(()=>
console.log("Connected to Database & Listening to localhost 5005")
);