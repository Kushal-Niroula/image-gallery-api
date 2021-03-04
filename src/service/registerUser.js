const knex =  require('../db.js');

/**
*@param{obj} object
*registers new user in the database in table users
*/
function registerUser(obj){

  knex('users')
  .insert({
    username:obj.username,
    password:obj.password
  }).then(()=>{
    console.log("inserted");
  }
  )
}

module.exports = registerUser;
