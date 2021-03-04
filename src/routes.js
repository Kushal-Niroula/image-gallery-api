const express = require('express');
const router = express.Router();
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const firstScreen = require('./routes/firstScreen');
const createRoute = require('./routes/createRoute');
const viewRoute = require('./routes/viewRoute');
const deleteRoute = require('./routes/deleteRoute');

router.use('/register',registerRoute);
router.use('/login',loginRoute);
router.use('/',firstScreen);
router.use('/create',createRoute);
router.use('/view',viewRoute);
router.use('/delete',deleteRoute);

module.exports = router;
