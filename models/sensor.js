"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sensor.belongsTo(models.Device);
      Sensor.belongsTo(models.Stock);
      Sensor.hasMany(models.SensorReading);
    }
  }
  Sensor.init(
    {
      DeviceId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      StockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sensor",
    }
  );
  return Sensor;
};
