// // sequelize-config.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('instagram', 'root', 'pass1234', {
  host: 'localhost',
  port: 3306 ,
  dialect: 'mysql',
  logging: function () {},
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
  dialectOptions: {
      socketPath: "/var/run/mysqld/mysqld.sock"
  },
  define: {
      paranoid: true
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });



  module.exports = sequelize;

