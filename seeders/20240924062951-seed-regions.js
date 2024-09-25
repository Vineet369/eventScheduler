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
      },
      {
        name: 'Brazil',
        time_zone: 'America/Sao_Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Australia',
        time_zone: 'Australia/Sydney',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'United Kingdom',
        time_zone: 'Europe/London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Germany',
        time_zone: 'Europe/Berlin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Africa',
        time_zone: 'Africa/Johannesburg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Japan',
        time_zone: 'Asia/Tokyo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'China',
        time_zone: 'Asia/Shanghai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canada',
        time_zone: 'America/Toronto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Russia',
        time_zone: 'Europe/Moscow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mexico',
        time_zone: 'America/Mexico_City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Argentina',
        time_zone: 'America/Argentina/Buenos_Aires',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Korea',
        time_zone: 'Asia/Seoul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'United Arab Emirates',
        time_zone: 'Asia/Dubai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Zealand',
        time_zone: 'Pacific/Auckland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nigeria',
        time_zone: 'Africa/Lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Italy',
        time_zone: 'Europe/Rome',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'France',
        time_zone: 'Europe/Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Regions', null, {});

  }
};
