const { DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');
const User = require('../models/User');
const Post = require('../models/Post');

const Comment = sequelize.define('Comment', {
    commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    parentId: {
        type: DataTypes.INTEGER,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    
});

// Define associations

Comment.associate = (models) => {
    Comment.hasMany(models.Comment, {

        foreignKey: 'parentId',
        as: 'replies', //alias for the association
        onDelete: 'CASCADE',
    });
    Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });

}
module.exports = Comment;
