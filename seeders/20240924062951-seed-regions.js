'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Regions', [
      {
        name: 'Singapore',
        time_zone: 'Asia/Singapore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'United States',
        time_zone: 'America/New_York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'India',
        time_zone: 'Asia/Kolkata',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Regions', null, {});

  }
};
