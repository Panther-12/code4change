const mongoose = require('mongoose')

// import the user and data models
const {database} = require('../database')



// Body containing all controllers
const getUsers = (req,res)=>{
    const users = database.getAllUsers()
    // send the data in json format
    return res.status(200).json({users})
    }



// Exports all controllers/functions defined in this file
module.exports = {getUsers}