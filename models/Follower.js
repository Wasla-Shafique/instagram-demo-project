const { DataTypes } = require('sequelize');
const sequelize = require('../sequel-config'); 
const Follower = sequelize.define('Follower', {
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'userId',
        },
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'userId',
        },
      },
      

});

module.exports = Follower;
