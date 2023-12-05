const express = require('express');
const reactionController = require('../controllers/Reaction');

const router = express.Router();

console.log("inside like route");

router.post('/api/like',reactionController.likePost);
router.delete('/api/unlike', reactionController.unlikePost)


module.exports = router