// import required modules
const express = require('express')
const router = express.Router()

// import the controllers
const {getUsers, Users} = require('../controller/members')


// Body containing all routes
router.get('/',getUsers)

router.post('/AddUser', Users)


//export the routes
module.exports = router