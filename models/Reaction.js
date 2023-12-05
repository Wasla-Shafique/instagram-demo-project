const { DataTypes } = require('sequelize');
const sequelize = require('../sequel-config'); 
const Post = require('./Post');
const User = require('./User');

const Reaction = sequelize.define('Reaction', {
    reactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
});

Reaction.belongsTo(User ,{ foreignKey: 'userId' });
Reaction.belongsTo(Post ,{ foreignKey: 'id' });

Post.hasMany(Reaction);
User.hasMany(Reaction);


module.exports = Reaction;
