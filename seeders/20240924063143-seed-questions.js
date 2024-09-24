'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
      {
        text: 'What is the capital of Singapore?',
        cycle: 1,
        region_id: 1, // Region 1 is Singapore
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'What is the main currency of Singapore?',
        cycle: 2,
        region_id: 1, // Region 1 is Singapore
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'What is the capital of the United States?',
        cycle: 1,
        region_id: 2, // Region 2 is United States
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Who was the first president of the United States?',
        cycle: 2,
        region_id: 2, // Region 2 is United States
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'What is the capital of India?',
        cycle: 1,
        region_id: 3, // Region 3 is India
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'What is the major language spoken in India?',
        cycle: 2,
        region_id: 3, // Region 3 is India
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});

  }
};
