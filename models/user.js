"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Device);
    }

    async isValidPassword(password) {
      return await bcrypt.compare(password, this.passwordHash);
    }

    canViewUser(viewer) {
      return viewer.role === "admin" || viewer.id === this.id;
    }

    canModifyUser(viewer) {
      return viewer.id === this.id;
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      username: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
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
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeSave: async (user, options) => {
          const salt = await bcrypt.genSalt(10);
          user.passwordHash = await bcrypt.hash(user.passwordHash, salt);
        },
      },
    }
  );
  return User;
};
