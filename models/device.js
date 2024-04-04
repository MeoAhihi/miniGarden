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
      Device.hasMany(models.Sensor);
      Device.hasMany(models.ControlUnit);
      Device.hasMany(models.Balancer);
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
