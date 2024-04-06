"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Stocks", [
      {
        id: 1,
        brand: "MiniGarden",
        name: "Hydroponics Primary Frame",
        description: "Basic frame for hydroponics set",
        quantity: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        brand: "MiniGarden",
        name: "Thermometer DHT11a",
        description: "measure temperature",
        quantity: 260,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        brand: "MiniGarden",
        name: "Himid sensor DHT11b",
        description: "mearsure humidity",
        quantity: 175,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        brand: "MiniGarden",
        name: "Light sensor PDLS",
        description: "mearsure light level",
        quantity: 438,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        brand: "MiniGarden",
        name: "LED strip",
        description: "LED light",
        quantity: 466,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        brand: "MiniGarden",
        name: "Square Fan 80mm",
        description: "Fan",
        quantity: 312,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        brand: "MiniGarden",
        name: "Water pump 12V",
        description: "Small water pump",
        quantity: 375,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
