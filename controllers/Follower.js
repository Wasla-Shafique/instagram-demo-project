const express = require('express');
const User = require('../models/User');
const Follower = require('../models/Follower');

const router = express.Router();

// Follow a user
exports.followUser = async (req, res, next) => {
  const userId = req.body.userId;
  const followerId = req.params.userId; 
  try {
    console.log("userID ", userId);
    console.log(typeof(userId));
    const userToFollow = await User.findByPk(userId);
    console.log("user to follow", userToFollow);
    if (!userToFollow) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the follow relationship doesn't already exist
    const existingFollow = await Follower.findOne({
      where: { userId, followerId },
    });

    if (existingFollow) {
      return res.status(400).json({ error: 'Already following this user' });
    }

    // Create the follow relationship
    await Follower.create({ userId, followerId });

    res.status(200).json({ message: 'Successfully followed user' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Unfollow a user
exports.unfollowUser = async (req, res, next) => {
  const userId = req.body.userId;
  const followerId = req.params.userId; 
  try {
    const userToUnfollow = await User.findByPk(userId);
    if (!userToUnfollow) {
      return res.status(404).json({ error: 'User not found' });
    }

    const existingFollow = await Follower.findOne({
      where: { userId, followerId },
    });

    if (!existingFollow) {
      return res.status(400).json({ error: 'Not following this user' });
    }

    // Remove the follow relationship
    await existingFollow.destroy();

    res.status(200).json({ message: 'Successfully unfollowed user' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


