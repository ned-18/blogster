const express = require('express');
const router = express.Router();
const { storage } = require('../middlewares/storage');
const verifyToken = require('../middlewares/verifyToken');

const postController = require('../controller/post');

//Get /posts?page=0&limit=2
router.get('/posts', postController.getAllPosts);

//Get one post
router.get('/post/:postId', postController.getPost);

//Create post
router.post('/post', verifyToken, storage, postController.createPost);

//Update post
router.put('/post/:postId', verifyToken, storage, postController.updatePost);

//Delete post
router.delete('/post/:postId', verifyToken, postController.deletePost);

module.exports = router;
