"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Balancer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Balancer.belongsTo(models.Device);
    }
  }
  Balancer.init(
    {
      DeviceId: DataTypes.INTEGER,
      SensorId: DataTypes.INTEGER,
      ControlUnitId: DataTypes.INTEGER,
      operator: DataTypes.ENUM("gt", "lt"),
      threshold: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Balancer",
    }
  );
  return Balancer;
};
