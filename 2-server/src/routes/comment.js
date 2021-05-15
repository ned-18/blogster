const express = require('express');
const router = express.Router();
const { getCachedData, clearCachedData } = require('../middlewares/cachedData');
const verifyToken = require('../middlewares/verifyToken');

const commentController = require('../controller/comment');

const _ = undefined;

//Create comment /api/comment?postId=1
router.post('/comment', verifyToken, clearCachedData(_, 'postId'), commentController.createComment);

//Get all comments
router.get('/comments', getCachedData(_, 'postId'), commentController.getComments);

//Delete comment
router.delete('/comment/:commentId', commentController.deleteComment);

module.exports = router;
