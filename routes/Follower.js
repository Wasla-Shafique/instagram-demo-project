const express = require('express');
const followController = require('../controllers/Follower');

const router = express.Router();

console.log("inside follower route");

router.post('/api/user/:userId/follow',followController.followUser);
router.post('/api/user/:userId/unfollow', followController.unfollowUser)


module.exports = router