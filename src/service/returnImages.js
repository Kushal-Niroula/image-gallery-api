const knex = require('../db.js');

/**
*@param {req} object
*@param {res} object
*@param {id} number
*returns images as response to the browser where userid matches the login token
*/
function returnImages(req,res,id){
  knex('images')
  .where({
    userId:id
  })
  .select('image','uuid')
  .then((result)=>{
    res.json(result);
  })
}

module.exports= returnImages;
