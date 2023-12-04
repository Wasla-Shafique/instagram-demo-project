const express = require('express');
const postController = require('../controllers/Post');

const router = express.Router();

console.log("inside post route");

router.post('/api/post/:userId',postController.createPost);

router.get('/api/post/:userId', postController.getPosts);

router.delete('/api/post/:postId', postController.deletePost);

router.put('/api/post/:postId', postController.updatePost);


module.exports = router