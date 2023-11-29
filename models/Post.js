// post.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');
const User = require('./User'); // Import the User model

const Post = sequelize.define('Post', {
  caption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the relationship between User and Post
User.hasMany(Post);
Post.belongsTo(User);

module.exports = Post;
