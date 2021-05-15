const express = require('express');
const router = express.Router();

const { emailVerification } = require('../controller/emailVerification');

//Email verification
router.get('/verification', emailVerification);

module.exports = router;
