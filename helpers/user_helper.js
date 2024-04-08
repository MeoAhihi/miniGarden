const createError = require("http-errors");

const models = require("../models");

const getUser = async (req, res, next) => {
  const userId = req.payload.aud;
  const user = await models.User.findByPk(userId);
  if (!user) next(createError.NotFound("User not found"));
  req.user = user;
  next();
};

const roleIs = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      next(createError.Forbidden("User isn't allowed"));
    }
    next();
  };
};

const authUserDevice = async (req, res, next) => {
  const userId = req.payload.aud;
  const deviceId = req.params.deviceId;

  const deviceCount = await models.Device.count({
    where: { id: deviceId, UserId: userId },
  });

  if (!deviceCount) return next(createError.NotFound("Device not found"));

  req.deviceId = req.params.deviceId;
  next();
};

const authDeviceSensor = async (req, res, next) => {
  const { deviceId, sensorId } = req.params;

  const sensorCount = await models.Sensor.count({
    where: { id: sensorId, DeviceId: deviceId },
  });

  if (!sensorCount) return next(createError.NotFound("Sensor not found"));

  req.sensorId = req.params.sensorId;
  next();
};

const authDeviceControlUnit = async (req, res, next) => {
  const { deviceId, controlUnitId } = req.params;

  const controlUnitCount = await models.ControlUnit.count({
    where: { id: controlUnitId, DeviceId: deviceId },
  });

  if (!controlUnitCount)
    return next(createError.NotFound("Control Unit not found"));

  req.controlUnitId = req.params.controlUnitId;
  next();
};

module.exports = {
  getUser,
  roleIs,
  authUserDevice,
  authDeviceSensor,
  authDeviceControlUnit,
};
