// import required modules
const express = require('express')
const router = express.Router()

// import the controllers
const {getUsers} = require('../controller/members')


// Body containing all routes
router.get('/',getUsers)



//export the routes
module.exports = router