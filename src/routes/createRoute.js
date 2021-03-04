const express= require('express');
const {v4} = require('uuid')
const router = express.Router();
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken');
const path = require('path');
const insertImage = require('../service/insertImage');

router.use(fileUpload());

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
      console.log(req);
      if(req.files == null){
        res.status(400).json({msg:"no file uploaded"});
      }
      const file  = req.files.file;
      let uniqueName = v4();
      let extension = path.extname(file.name);
      let fileName = uniqueName + extension;
      let filePath = __dirname + `/../../public/images/${fileName}`;
      file.mv(filePath);
      insertImage(uniqueName,fileName,authData.id);

    }
  }
)}
)
module.exports = router;
