// user.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');
const Follower = require('./Follower')


const User = sequelize.define('User', {
  userId:{
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
    defaultValue: 'default_profile_picture.jpg',
  },
  bio: {
    type: DataTypes.STRING,
  },
});

User.belongsToMany(User, {
  as: 'followers',
  through: Follower,
  foreignKey: 'userId',
  otherKey: 'followerId',
});

User.belongsToMany(User, {
  as: 'following',
  through: Follower,
  foreignKey: 'followerId',
  otherKey: 'userId',
});
module.exports = User;