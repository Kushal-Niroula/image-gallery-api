const express = require('express');
const router = express.Router();
const deleteImage = require('../service/deleteImage');

router.use(express.json());
router.post('/',deleteImage);

module.exports = router
