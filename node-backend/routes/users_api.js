// import required modules
const express = require('express')
const router = express.Router()

// import the controllers
const {getUsers,addUser,updateInfo,eraseUser} = require('../controller/members')


// Body containing all routes
router.get('/',getUsers)
router.post('/addMember',addUser)
router.patch('/patchUser',updateInfo)
router.delete('/delete',eraseUser)



//export the routes
module.exports = router