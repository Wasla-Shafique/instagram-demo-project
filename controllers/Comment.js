const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

exports.createComment = async (req, res, next) => {
    console.log("inside create comment");
    const { postId, userId, content, parentId } = req.body;
   
  try {
    // Create a new comment
    const comment = await Comment.create({
      postId : postId,
      userId :userId,
      content :content,
      parentId : parentId || null,
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
 
}

exports.deleteComment = async (req, res, next) => {
    console.log("inside delete comment");
 
    const commentId = req.params.commentId;

  try {
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    await comment.destroy();

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.getCommentsForPost = async (req, res, next) => {
    console.log("get comments for post");

const postId = req.params.postId;

  try {
    const comments = await Comment.findAll({
      where: { postId },
      //include: [{ model: Comment, as: 'replies' }], // Include replies
    });

    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

exports.editComment = async (req, res, next) => {
    console.log("inside edit comment");

const commentId = req.params.commentId;
  const { content } = req.body;

  try {
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.content = content;
    await comment.save();

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}