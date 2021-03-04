const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const returnImages = require('../service/returnImages');

router.get('/',(req,res)=>{

    let authHeader = req.headers['authorization'];
    jwt.verify(authHeader,'secret',(err,authData)=>{
      if(err){
        res.json({
          status:'failed',
          message:'invalid token'
        })
      }
      else{
        returnImages(req,res,authData.id)
      }
})
});

module.exports =  router;
