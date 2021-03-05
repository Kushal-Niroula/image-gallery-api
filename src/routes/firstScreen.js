const express= require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const {JWT_SECRET}= require('../env.js')


router.get('/',(req,res)=>{
  const authHeader= req.headers['authorization'];
  jwt.verify(authHeader,'secret',(err,authData)=>{
    if(err){
      res.json({
        isLogged:false
      })
    }
    else{
      res.json({
        isLogged:true,
        username:authData.username,
      })
    }
  }
)
})
module.exports = router
