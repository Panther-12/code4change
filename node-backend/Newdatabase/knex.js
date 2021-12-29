const knex = require('knex')


const connectedknex = knex(
    {
        client: "sqlite3",
        connection: {
            filename: "club_siteDB.sqlite3",
        }
    }
)


module.exports = connectedknex;