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
    await queryInterface.bulk("Users", [
      {
        username: "FoqAhihi",
        passwordHash: "",
        email: DataTypes.STRING,
        role: DataTypes.ENUM(
          "user",
          "admin",
          "supporter",
          "operator",
          "moderator"
        ),
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        gender: DataTypes.ENUM("male", "female", "other"),
        avatarUrl: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        bio: DataTypes.TEXT,
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
