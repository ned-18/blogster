const express = require('express');
const router = express.Router();

const contactMeController = require('../controller/contactMe');

//Send email
router.post('/contact-me', contactMeController.contactMe);

module.exports = router;
