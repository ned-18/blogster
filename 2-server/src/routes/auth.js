const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');

//Register user
router.post('/register', authController.registerUser);

//Login user
router.post('/login', authController.loginUser);

//Check is user authenticated
router.get('/check-auth', authController.checkAuth);

//Logout user
router.get('/logout', authController.logout);

module.exports = router;
