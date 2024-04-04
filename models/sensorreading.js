"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SensorReading extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SensorReading.belongsTo(models.Sensor);
    }
  }
  SensorReading.init(
    {
      SensorId: DataTypes.INTEGER,
      value: DataTypes.DECIMAL,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SensorReading",
      timestamps: true,
      updatedAt: false,
    }
  );
  return SensorReading;
};
