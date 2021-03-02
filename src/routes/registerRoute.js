const express =  require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const registerUser = require('../models/registerUser')
router.use(express.json());

router.use('/',(req,res,next)=>{
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if(err) throw err
    req.body.password = hash;
    next();
  })

})

router.post('/',(req,res)=>{
  console.log(req.body);
  console.log("hello");
  registerUser({username:req.body.username,password:req.body.password});
  res.json({
    status:"success"  
  });
}
)
module.exports = router;
