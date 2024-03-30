"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ControlUnitLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ControlUnitLog.belongsTo(models.ControlUnit);
    }
  }
  ControlUnitLog.init(
    {
      ControlUnitId: DataTypes.INTEGER,
      action: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ControlUnitLog",
    }
  );
  return ControlUnitLog;
};
