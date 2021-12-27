const knex = require("./knex")


function addMember(user){
    return knex("Users").insert(user)
}

function getAllMembers(){
    return knex("Users").select("*")
}

function getUser(id,user){
    return knex("users").where("id",id).select("*")
}

function deleteUser(id){
    knex("users").where("id",id).del()
}

function updateUser(id,user){
    knex("users").where("id",id).update(user)
}
modules.export = {
    addMember,
    getAllMembers,
    getUser,
    deleteUser,
    updateUser
}