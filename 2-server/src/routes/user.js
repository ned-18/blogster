const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { profileStorage } = require('../middlewares/storage');

const userController = require('../controller/user');

// Get one profile
router.get('/profile', verifyToken, userController.getProfile);

// Edit profile
router.put('/profile', verifyToken, userController.updateProfile);

//Change password
router.put('/change-password', verifyToken, userController.changePassword);

// Upload profile image
router.put('/profile-image', verifyToken, profileStorage, userController.uploadProfileImage);

// Delete users account SOFT
router.put('/delete-profile', verifyToken, userController.deleteProfile);

module.exports = router;
