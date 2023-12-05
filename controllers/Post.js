const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");

const router = express.Router();


exports.getPosts = async (req, res, next) => {

    try {

        console.log("inside get Posts");
        const userId = req.params.userId;
        const posts = await Post.findAll({
            where: { userId: userId },
        });
        res.json(posts);
    } catch (error) {
        console.error('There is now post by this user :', error);
        res.status(500).send('Internal Server Error');
    }

}

exports.createPost = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const caption = req.body.caption;

        // check if user exists in Users table
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log("UserId", userId);
        // Create the post
        const newPost = await Post.create({
            userId: 1,
            caption: caption,
        });

        return res.status(201).json(newPost);
    } catch (error) {
        console.error("Error creating new post : ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        console.log("inside delete post");
        const postId = req.params.postId;
        console.log("post id", postId);

        if (!/^\d+$/.test(postId)) {
            return res.status(400).json({ error: 'Invalid userId' });
        }

        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(404).json({ error: 'post not found' });
        }

        await post.destroy();

        // Respond with a success message
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting Post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

exports.updatePost = async (req, res, next) =>{

    try {
        const postId = req.params.postId;
        const caption = req.body.caption;

        if (!/^\d+$/.test(postId)) {
          return res.status(400).json({ error: 'Invalid post requested' });
        }
    
        const post = await Post.findByPk(postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
    
        await post.update({ caption });
    
        res.status(200).json(post);
      } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

}