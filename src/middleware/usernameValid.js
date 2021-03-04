const knex = require('../db.js');

/**
*
*@param {req} object
*@param {res} object
*@param {next} function
* checks if the new username already exists in the database 
*/
function usernameValid(req,res,next){
  knex('users')
  .where({
    username:req.body.username
  })
  .then((result)=>{
    if(result.length){
      res.json({
        status:"failed",
        message:"user already exists"
      })
    }
    else{
      next();
    }
  })
}

module.exports = usernameValid;
