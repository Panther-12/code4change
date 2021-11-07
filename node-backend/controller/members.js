
// Body containing all controllers
const getUsers = (req,res)=>{
    res.status(200).json({sucess:true,msg:`Welcome to members page`})
}


// Exports all controllers/functions defined in this file
module.exports = {getUsers}