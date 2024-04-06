"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.User);
      Device.belongsTo(models.Stock);
      Device.hasMany(models.Sensor, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Device.hasMany(models.ControlUnit, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Device.hasMany(models.Balancer, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }

    canView(user) {
      return user.role === "admin" || user.id === this.UserId;
    }

    canModify(user) {
      return user.id === this.UserId;
    }
  }
  Device.init(
    {
      UserId: DataTypes.UUID,
      name: DataTypes.STRING,
      BSmode: DataTypes.ENUM("balancer", "schedule"),
      StockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Device",
    }
  );
  return Device;
};
