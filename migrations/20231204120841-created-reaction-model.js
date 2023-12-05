'use strict';

/** @type {import('sequelize-cli').Migration} */
// migrations/YYYYMMDDHHMMSS-create-reaction.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the 'Reactions' table
    await queryInterface.createTable('Reactions', {
      reactionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE,
      },
    })

    //Add foreign key constraints
    // await queryInterface.addConstraint('Reactions', {
    //   fields: ['userId'],
    //   type: 'foreign key',
    //   name: 'fk_user_reaction',
    //   references: {
    //     table: 'Users',
    //     field: 'userId',
    //   },
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE',
    // });

    // await queryInterface.addConstraint('Reactions', {
    //   fields: ['postId'],
    //   type: 'foreign key',
    //   name: 'fk_post_reaction',
    //   references: {
    //     table: 'Posts',
    //     field: 'id',
    //   },
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE',
    // });
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reactions');
  },
};
