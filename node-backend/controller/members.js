const mongoose = require('mongoose')

// import the user and data models
const {User,Data} = require('../database_file')


// dummy database
const userDbase = [
    {
        username:'nimrod',
        age:18,
        Skillset:'Web development and Data analysis'
    }
]

// Body containing all controllers
const getUsers = (req,res)=>{
    res.status(200).send({'database':userDbase})
    }

// Dummy database
const user_registration = []

// Handle user data from registration form
const Users = (req,res)=>{
    newUser = req.body
    if(newUser !== ''){
        return res.status(200).json(
            {
                sucess:true, 
                msg:`Sucessfully registered. Welcome ${newUser}`
            })
    }
    res.status(404).json(
        {
            sucess:false,
            msg:`Failed to register please check the name or email`
        }
    )
    
}

// Exports all controllers/functions defined in this file
module.exports = {getUsers, Users}