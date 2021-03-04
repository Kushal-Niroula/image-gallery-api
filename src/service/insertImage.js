const knex= require('../db.js');

/**
*@param {uniqueName} string
*@param {fileName} string
*@param {userId} number
* inserts image in the database with unique uuid
*/
function insertImage(uniqueName,fileName,userId){
  knex('images')
  .insert({
    uuid:uniqueName,
    image:`images/${fileName}`,
    userId: parseInt(userId)
  })
  .then(()=>{
    console.log('image inserted');
  })
}

module.exports = insertImage;
