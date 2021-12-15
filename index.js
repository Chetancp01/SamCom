require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db  = process.env.DB;
const port = process.env.PORT || 3000;

//3rd party middleware for use parsing the data
app.use(express.json());

//Routes API 
app.use('/api',require('./routes'));

//MongoDB Connection
//I'am using my mongodb live cluster so i will removed SRV string form env file
mongoose.connect(db,{
    useUnifiedTopology: true,useNewUrlParser: true
}).then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(`Connection Not Success ${err.message}`);
});


//Server Connection
app.listen(port,(err) => {
    if(!err) {
        console.log(`Server is running on port: ${ port }`);
    }else{
        console.log(`Not connect to server: ${ err }`);
    }
});