const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const Reaction = require('../models/Reaction');

const router = express.Router();


exports.likePost = async (req, res, next) => {

    console.log("inside like post");
    const { postId, userId } = req.body;
    console.log(postId + " ," + userId );

    try {

      const reaction = await Reaction.create({
         postId,
         userId,
       // reactionType: 'like',
      });
  
      res.json(reaction);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

}

exports.unlikePost = async (req, res, next) => {
    const { postId, userId } = req.body;


    console.log("inside unlike post");
    console.log(postId + " ," + userId );

    try {
      const reaction = await Reaction.create({
        postId: postId,
        userId: userId,
       // reactionType: 'unlike',
      });
  
      res.json(reaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

}



