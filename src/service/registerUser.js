const knex =  require('../db.js');

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
