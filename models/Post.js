const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');
const User = require('../models/User');
const Comment = require('../models/Comment');


const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  caption: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING(255), 
    defaultValue: "https://images.app.goo.gl/mTsD3T7x2RoPUnac6",
    allowNull: true,
  },

});

// Associations with users table
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});



module.exports = Post;


