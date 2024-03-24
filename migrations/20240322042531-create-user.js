"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      userRights: {
        type: Sequelize.ENUM(
          "admin",
          "moderator",
          "user",
          "operator",
          "supporter"
        ),
      },
      fullName: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.ENUM("male", "female", "other"),
      },
      profile: {
        type: Sequelize.STRING,
      },
      lastLogin: {
        type: Sequelize.DATE,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Users");
  },
};
