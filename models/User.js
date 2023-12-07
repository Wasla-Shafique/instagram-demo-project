// user.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,

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

module.exports = User;