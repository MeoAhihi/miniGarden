"use strict";
const models = require("../models");
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
    const user = await models.User.create({
      username: "FoqAhihi",
      passwordHash: "0123456789",
      email: "phong@hmao.com",
      role: "admin",
      firstName: "Ly",
      lastName: "Bi Phong",
      dateOfBirth: "2000-01-30",
      gender: "male",
      phoneNumber: "0835601805",
    });
    const device = await models.Device.create({
      UserId: user.id,
      name: "ahihi",
      StockId: 0,
    });
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
