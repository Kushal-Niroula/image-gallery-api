const knex = require('../db.js');

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
