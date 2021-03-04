const express = require('express');
const router = express.Router();
const matchLogin = require('../service/matchLogin')

router.use(express.json());

router.post('/',matchLogin)
module.exports = router;
