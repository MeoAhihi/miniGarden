"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING(50),
      password_hash: DataTypes.STRING,
      email: DataTypes.STRING(100),
      user_rights: DataTypes.STRING,
      full_name: DataTypes.STRING(100),
      date_of_birth: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      last_login: DataTypes.DATE,
      phone_number: DataTypes.STRING(20),
      address: DataTypes.STRING,
      city: DataTypes.STRING(100),
      state: DataTypes.STRING(100),
      country: DataTypes.STRING(100),
      postal_code: DataTypes.STRING(20),
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
