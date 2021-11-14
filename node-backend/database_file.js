
/* const mongoose = require('mongoose')
// setup the mongoose parameters

try{
    mongoose.connect(
        "https://cloud.mongodb.com/v2/618a5905f057427ddd94e1fe#clusters?fastPoll=true",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
    )
    
}
catch(err){
    console.log(`Failed to establish connection with mongo db`)
}


db = mongoose.connection
db.on('error', console.error.bind(console, 'connection erro:'))
db.once('open',
    // registration table
    mongoose.Schema(
    {
        id:Number,
        username:String,
        Age:Number,
        email:{
            type:String,
            required:true,
        },
    }
)

)

// create the user model/ collection
const User = mongoose.model('USER',Registration)
*/
