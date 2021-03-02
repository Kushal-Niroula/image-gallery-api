const express= require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


router.get('/',(req,res)=>{
  const authHeader= req.headers['authorization'];
  console.log('[log] reached get request');
  jwt.verify(authHeader,'secret',(err,authData)=>{
    if(err){
      res.json({
        isLogged:false
      })
    }
    else{
      res.json({
        isLogged:true
      })
    }
  }
)
})
module.exports = router
