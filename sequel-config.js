// sequelize-config.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('instagram-db', 'root', 'pass1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
