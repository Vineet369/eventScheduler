'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
      // Singapore
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
        text: 'What is the national language of Singapore?',
        cycle: 3,
        region_id: 1, // Region 1 is Singapore
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // United States
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
        text: 'What is the largest state in the United States?',
        cycle: 3,
        region_id: 2, // Region 2 is United States
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // India
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
      },
      {
        text: 'What is the national animal of India?',
        cycle: 3,
        region_id: 3, // Region 3 is India
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // Brazil
      {
        text: 'What is the capital of Brazil?',
        cycle: 1,
        region_id: 4, // Region 4 is Brazil
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which language is predominantly spoken in Brazil?',
        cycle: 2,
        region_id: 4, // Region 4 is Brazil
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which city in Brazil hosts the famous Carnival festival?',
        cycle: 3,
        region_id: 4, // Region 4 is Brazil
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // Australia
      {
        text: 'What is the capital of Australia?',
        cycle: 1,
        region_id: 5, // Region 5 is Australia
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which animal is commonly associated with Australia?',
        cycle: 2,
        region_id: 5, // Region 5 is Australia
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which famous reef is located in Australia?',
        cycle: 3,
        region_id: 5, // Region 5 is Australia
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // United Kingdom
      {
        text: 'What is the capital of the United Kingdom?',
        cycle: 1,
        region_id: 6, // Region 6 is United Kingdom
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which river flows through London?',
        cycle: 2,
        region_id: 6, // Region 6 is United Kingdom
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Who is the current monarch of the United Kingdom?',
        cycle: 3,
        region_id: 6, // Region 6 is United Kingdom
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // Germany
      {
        text: 'What is the capital of Germany?',
        cycle: 1,
        region_id: 7, // Region 7 is Germany
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which festival is celebrated in Munich, Germany?',
        cycle: 2,
        region_id: 7, // Region 7 is Germany
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Who was the first chancellor of unified Germany?',
        cycle: 3,
        region_id: 7, // Region 7 is Germany
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      // South Africa
      {
        text: 'What is the capital of South Africa?',
        cycle: 1,
        region_id: 8, // Region 8 is South Africa
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which famous leader helped end apartheid in South Africa?',
        cycle: 2,
        region_id: 8, // Region 8 is South Africa
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Which desert is located in South Africa?',
        cycle: 3,
        region_id: 8, // Region 8 is South Africa
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});

  }
};
