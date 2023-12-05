const express = require('express');
const commentController = require('../controllers/Comment');

const router = express.Router();

console.log("inside comment route");

router.post('/api/comment/', commentController.createComment);
router.delete('/api/comment/:commentId', commentController.deleteComment);
router.get('/api/comment/:postId', commentController.getCommentsForPost);
router.put('/api/comment/:commentId', commentController.editComment);



module.exports = router