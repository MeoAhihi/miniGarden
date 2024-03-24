'use strict';
const {
  Model
} = require('sequelize');
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
  User.init({
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    email: DataTypes.STRING,
    userRights: DataTypes.STRING,
    fullName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    profile: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};