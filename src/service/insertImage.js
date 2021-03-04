const knex= require('../db.js');

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
