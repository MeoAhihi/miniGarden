"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ControlUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ControlUnit.belongsTo(models.Device);
      ControlUnit.belongsTo(models.Stock);
      ControlUnit.hasMany(models.ControlUnitLog)
    }
  }
  ControlUnit.init(
    {
      DeviceId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      StockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ControlUnit",
    }
  );
  return ControlUnit;
};
