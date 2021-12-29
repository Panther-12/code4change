const sqlite3 = require('sqlite3').verbose()

// Function that creates new database and tables
function database(){
    // new database 
    let db = new sqlite3.Database('./Newdatabase/club_siteDB.db',(error)=>{
        if(error){
            return console.error(error)
        }
        console.log('connection successful')
    })

    function getAllUsers () {
        // select all data from users
        const sql = 'SELECT * FROM Users'
        // Query all data from users table
        db.all(sql,[],(err,rows)=>{
            if(err){
                console.error(err)
            }
            rows.forEach(row => {
               return row 
            });
        })
    }
/*     // Passing data as arguments to the values function
    const sql = 'INSERT INTO Users(Name,Age,Skillset,Description) VALUES(?,?,?,?)' */


  /*  // create the tables defined in the database
    db.run('CREATE TABLE Users(Name,Age,Skillset,Description)',(error)=>{
        if(error){
            return console.log(error)
        }
        console.log('tables created successfully')
    })
    */
/* 
    // Adding the data to the table fields
    db.run(
        sql,
        [
            'Nimrod',18,'Web designer and data analyst',
             'A passionate tech enthusiast who aims to leave a mark in the tech world'
        ],
        (err)=>{
            if(err){
                console.error(err)
            }
            console.log('data added successfully')
        }
    ) */

    // close the database after operations
    db.close()
}



module.exports = {database}




