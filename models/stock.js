"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.hasMany(models.Device);
      Stock.hasMany(models.Sensor);
      Stock.hasMany(models.ControlUnit);
    }
  }
  Stock.init(
    {
      brand: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stock",
    }
  );
  return Stock;
};
