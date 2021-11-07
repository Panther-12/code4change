//import express module
// initialize an app instance
const express = require('express');
const app = express();

//import the routes
const users = require('./routes/users_api')


// import api middleware
app.use('/api/members',users)

// import the relevant middleware
app.use(express.json())
app.use(express.urlencoded(
    {
        extended:false
    }))

app.get('/about',(req,res)=>{
    res.status(200).send('welcome to about page')
})
    
// Listen to the server
app.listen(3001,()=>{
    console.log('server listening on port 3001........')
})
