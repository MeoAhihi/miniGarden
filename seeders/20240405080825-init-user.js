"use strict";

const { Op } = require("sequelize");

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
      "Users",
      [
        {
          id: "3aefd1e5-d8bf-4757-ab43-795dccd43aa0",
          username: "MeoAhihi",
          passwordHash: "0835607205",
          email: "MeoAhihi@gmail.com",
          role: "admin",
          firstName: "Lý",
          lastName: "Vĩ Phong",
          dateOfBirth: "2003-04-28",
          gender: "male",
          phoneNumber: "0835607205",
          address: "708/1/1 Hồng Bàng, Phường 1",
          district: "11",
          city: "Hồ Chí Minh",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7ecdc8ef-1bd6-40ca-9c2a-3c804312caa1",
          username: "FoqAhihi",
          passwordHash: "phong28042003",
          email: "FoqAhihi@gmail.com",
          role: "operator",
          firstName: "Lý",
          lastName: "Vĩ Phong",
          dateOfBirth: "2003-04-29",
          gender: "male",
          phoneNumber: "0835607206",
          address: "1 Yersin, Phường 10",
          district: "",
          city: "Đà Lạt",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3b925ddd-1300-4464-ad9c-1f0ec91f21cd",
          username: "Kagaku",
          passwordHash: "hoc21112003",
          email: "Kagaku@gmail.com",
          role: "moderator",
          firstName: "Lưu",
          lastName: "Khoa Học",
          dateOfBirth: "2003-11-21",
          gender: "male",
          phoneNumber: "0778978372",
          address: "41 Phan Đình Phùng",
          district: "Phan ĐÌnh Phùng",
          city: "Nam Định",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "076c6de2-23fa-4c05-b36e-5457b7177d3c",
          username: "NhienLee",
          passwordHash: "nhien08012001",
          email: "NhienLee@gmail.com",
          role: "supporter",
          firstName: "Lý",
          lastName: "Hồng Nhiên",
          dateOfBirth: "2001-01-08",
          gender: "female",
          phoneNumber: "0776700839",
          address: "123 Cù Luyển",
          district: "5",
          city: "Long An",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0eb8cef2-d447-4f37-8a12-8465f7745183",
          username: "JohnDoe",
          passwordHash: "11111111",
          email: "JohnDoe@gmail.com",
          role: "user",
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: "1998-05-02",
          gender: "male",
          phoneNumber: "0340725586",
          address: "81A Thoại Ngọc Hầu, phường Hiệp Tân",
          district: "Tân Phú",
          city: "Hồ Chí Minh",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9ac85853-dbd0-4635-ac56-49f273271c05",
          username: "Parisma",
          passwordHash: "22222222",
          email: "Parisma@gmail.com",
          role: "user",
          firstName: "Jakhishamis",
          lastName: "Parisma",
          dateOfBirth: "1982-09-03",
          gender: "female",
          phoneNumber: "0559583878",
          address: "135/1 Lê Văn Quới, phường Bình Trị Đông",
          district: "Bình Tân",
          city: "Hồ Chí Minh",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c6f15848-ee3e-4ffa-ba99-aaaab118237a",
          username: "a.ninh_",
          passwordHash: "33333333",
          email: "a.ninh_@gmail.com",
          role: "user",
          firstName: "Bùi",
          lastName: "Ninh Anh",
          dateOfBirth: "1994-04-18",
          gender: "male",
          phoneNumber: "0993984080",
          address: "Lý Thái Tổ",
          district: "Trần Phú",
          city: "Bắc Giang",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a63c8a07-54cc-4f3f-81c2-3ebdd7ec194b",
          username: "t.duong_",
          passwordHash: "44444444",
          email: "t.duong_@gmail.com",
          role: "user",
          firstName: "Lê",
          lastName: "Tùng Dương",
          dateOfBirth: "1997-05-21",
          gender: "male",
          phoneNumber: "0971376184",
          address: "Tân Khai",
          district: "Bình Long",
          city: "Bình Phước",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "39f74ad3-b299-41ad-b255-f6263ae39e47",
          username: "MyLeeUyen",
          passwordHash: "55555555",
          email: "MyLeeUyen@gmail.com",
          role: "user",
          firstName: "Lý",
          lastName: "Uyển My",
          dateOfBirth: "2012-10-26",
          gender: "female",
          phoneNumber: "0587770071",
          address: "Hòa Thuận Đông",
          district: "Hải Châu",
          city: "Đà Nẵng",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "8839cccf-1a28-4b8a-9aa0-a85687436bb9",
          username: "q_khanh",
          passwordHash: "66666666",
          email: "q_khanh@gmail.com",
          role: "user",
          firstName: "Trần",
          lastName: "Quốc Khánh",
          dateOfBirth: "2003-05-07",
          gender: "male",
          phoneNumber: "0593845418",
          address: "68-70 Điện Biên Phủ",
          district: "Hồng Bàng",
          city: "Hải Phòng",
          country: "Việt Nam",
          postalCode: "70000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Devices",
      [
        {
          UserId: "0eb8cef2-d447-4f37-8a12-8465f7745183",
          name: "A device",
          BSmode: "schedule",
          StockId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "9ac85853-dbd0-4635-ac56-49f273271c05",
          name: "B device",
          BSmode: "schedule",
          StockId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "c6f15848-ee3e-4ffa-ba99-aaaab118237a",
          name: "C device",
          BSmode: "schedule",
          StockId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "a63c8a07-54cc-4f3f-81c2-3ebdd7ec194b",
          name: "D device",
          BSmode: "schedule",
          StockId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "39f74ad3-b299-41ad-b255-f6263ae39e47",
          name: "E device",
          BSmode: "schedule",
          StockId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: "8839cccf-1a28-4b8a-9aa0-a85687436bb9",
          name: "F device",
          BSmode: "schedule",
          StockId: 1,
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
      "Users",
      {
        id: {
          [Op.in]: [
            "3aefd1e5-d8bf-4757-ab43-795dccd43aa0",
            "7ecdc8ef-1bd6-40ca-9c2a-3c804312caa1",
            "3b925ddd-1300-4464-ad9c-1f0ec91f21cd",
            "076c6de2-23fa-4c05-b36e-5457b7177d3c",
            "0eb8cef2-d447-4f37-8a12-8465f7745183",
            "9ac85853-dbd0-4635-ac56-49f273271c05",
            "c6f15848-ee3e-4ffa-ba99-aaaab118237a",
            "a63c8a07-54cc-4f3f-81c2-3ebdd7ec194b",
            "39f74ad3-b299-41ad-b255-f6263ae39e47",
            "8839cccf-1a28-4b8a-9aa0-a85687436bb9",
          ],
        },
      },
      {}
    );
    await queryInterface.bulkDelete(
      "Devices",
      {
        id: {
          [Op.in]: [1, 2, 3, 4, 5, 6],
        },
      },
      {}
    );
  },
};
