'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Command extends Model {
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
  Command.init({
    ControlUnitId: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    emiter: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Command',
  });
  return Command;
};