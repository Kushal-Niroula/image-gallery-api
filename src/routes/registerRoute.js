const express =  require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const registerUser = require('../service/registerUser')
const usernameValid = require('../middleware/usernameValid')
router.use(express.json());

router.use('/',(req,res,next)=>{
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if(err) throw err
    req.body.password = hash;
    next();
  })

})
router.use('/',usernameValid);

router.post('/',(req,res)=>{
  registerUser({username:req.body.username,password:req.body.password});
  res.json({
    status:"success"
  });
}
)
module.exports = router;
