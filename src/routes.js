const express = require('express');
const router = express.Router();
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const firstScreen = require('./routes/firstScreen');
const createRoute = require('./routes/createRoute');

router.use('/register',registerRoute);
router.use('/login',loginRoute);
router.use('/',firstScreen);
router.use('/create',createRoute);

module.exports = router;
