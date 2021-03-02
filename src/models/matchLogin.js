const bcrypt = require('bcrypt');
const knex= require('../db.js');
const jwt = require('jsonwebtoken')

function matchLogin(req,res){
knex('users')
.where({
  username:req.body.username
})
.select('password')
.then((result)=>{
  if(result.length == 1){
    bcrypt.compare(req.body.password,result[0].password,(err,matched)=>{
      if (matched) {
             jwt.sign(
               {
                 username: req.body.username,
               },
               'secret',
               (err, token) => {
                 if (err) {
                   throw err;
                 }
                 res.json({
                   logged:'success',
                   token: token,
                 });
               }
             );
           } else {
             res.json(
               {
                 logged:'failed',
                 message:'password didnt match'
               }
             );
           }


})
}
else{
  res.json({
    logged:'failed',
    message:'no user found'
  });
}
});
}

module.exports = matchLogin
