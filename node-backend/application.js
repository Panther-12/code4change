//import express module
// initialize an app instance
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


// used to allow setting of environmental variables in a separate file
require('dotenv').config()

//import the routes
const users = require('./routes/users_api')


// import api middleware
app.use('/members',users)

// import the relevant middleware
app.use(bodyParser.urlencoded({extended:false,}))
app.use(bodyParser.json())


// Listen to the server
app.listen(3001,()=>{
    console.log('server listening on port 3001........')
})
