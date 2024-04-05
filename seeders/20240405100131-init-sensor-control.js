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
    await queryInterface.bulkInsert(
      "Sensors",
      [
        {
          DeviceId: 1,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "thermometer",
          StockId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 1,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "humidity sensor",
          StockId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 1,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "light sensor",
          StockId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "ControlUnits",
      [
        {
          DeviceId: 1,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "LED Light",
          StockId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 1,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "Fan 1",
          StockId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 1,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "Fan 2",
          StockId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 1,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 2,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 3,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 4,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 5,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          DeviceId: 6,
          name: "Pump",
          StockId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete(
      "Sensors",
      {
        id: {
          [Op.in]: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ],
        },
      },
      {}
    );

    await queryInterface.bulkDelete(
      "ControlUnits",
      {
        id: {
          [Op.in]: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
        },
      },
      {}
    );
  },
};
