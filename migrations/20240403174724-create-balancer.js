"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Balancers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DeviceId: {
        type: Sequelize.INTEGER,
      },
      SensorId: {
        type: Sequelize.INTEGER,
      },
      ControlUnitId: {
        type: Sequelize.INTEGER,
      },
      operator: {
        type: Sequelize.ENUM("gt", "lt"),
      },
      threshold: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Balancers");
  },
};
