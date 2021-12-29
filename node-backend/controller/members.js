const db = require('../Newdatabase/data_handling')



// Body containing all controllers
const getUsers = async (req,res)=>{
    const results = await db.getAllMembers()
    // send the data in json format
    return res.status(200).json({results})
    }

// Add a user to the database
const addUser = async(req,res)=>{
    const newUser = await db.addMember(req.body)
    return res.status(201).json({id: newUser[0]})
}

// Update user information
const updateInfo = async (req,res)=>{
    const update = await db.updateUser(req.params.id,req.body)
    return res.status(200).json({id})
}

// Delete user from database
const eraseUser = async (req,res)=>{
    const deleteUser = await db.deleteUser(req.params.id)
    return res.status(200).json({id})
}


// Exports all controllers/functions defined in this file
module.exports = {
    getUsers,
    addUser,
    updateInfo,
    eraseUser
}