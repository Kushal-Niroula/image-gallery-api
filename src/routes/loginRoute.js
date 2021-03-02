const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const matchLogin = require('../models/matchLogin')

router.use(express.json());

router.post('/',matchLogin)
module.exports = router;
