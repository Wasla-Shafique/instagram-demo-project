// user.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequel-config');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;