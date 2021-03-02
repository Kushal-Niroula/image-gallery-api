const express= require('express');
const router = express.Router();
const fileUpload = require('express-fileUpload');
const jwt = require('jsonwebtoken');


router.post('/',(req,res)=>{
  let authHeader = req.headers['authorization'];
  jwt.verify(authHeader,'secret',(err,authData)=>{
    if(err){
      res.json({
        status:'failed',
        message:'invalid token'
      })
    }
    else{

    }
  }
})
