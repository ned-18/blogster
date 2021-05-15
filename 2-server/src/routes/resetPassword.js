const express = require('express');
const router = express.Router();

const { resetPassword, forgotPassword } = require('../controller/resetPassword');

//Forgot password
router.post('/forgot-password', forgotPassword);

//Reset password
router.post('/reset-password', resetPassword);

module.exports = router;
