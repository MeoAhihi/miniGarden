const createError = require("http-errors");

const models = require("../models");
const { deviceUpdateSchema } = require("../helpers/validation_schema");

const index = async (req, res) => {
  const devices = await req.user.getDevices();
  res.send(devices);
};

const get = async (req, res, next) => {
  const deviceId = req.params.id;
  const device = await models.Device.findByPk(deviceId);

  if (!device?.canView(req.user)) return next(createError.Forbidden());
  res.send(device);
};

const add = async (req, res, next) => {
  const DeviceInfo = req.body;

  const matchDevice = await models.Stock.findByPk(DeviceInfo.StockId);
  if (!matchDevice) return next(createError.NotFound("Stock not found"));

  const savedDevice = await req.user.createDevice({
    UserId: req.payload.aud,
    BSmode: "schedule",
    ...DeviceInfo,
  });

  res.send(savedDevice);
};

const update = async (req, res, next) => {
  try {
    const deviceId = req.params.id;
    const device = await models.Device.findByPk(deviceId);

    const deviceUpdate = await deviceUpdateSchema.validateAsync(req.body);

    if (!device) {
      return next(createError.NotFound("No Device found"));
    }
    if (!device.canModify(req.user)) {
      return next(createError.Forbidden("User unabled to update device"));
    }
    if (Object.keys(deviceUpdate).length === 0) {
      return res.status(304).send("No updation");
    }

    device.set(deviceUpdate);
    await device.save();

    res.send(device);
  } catch (error) {
    if (error.isJoi) {
      next(createError.BadRequest("invalide infomation"));
    }
    next(error);
  }
};

const remove = async (req, res, next) => {
  const deviceId = req.params.id;
  const device = await models.Device.findByPk(deviceId);

  if (!device) {
    return next(createError.NotFound("No Device found"));
  }
  if (!device.canModify(req.user)) {
    return next(createError.Forbidden("User isn't allowed to delete device"));
  }

  await device.destroy();
  res.send({ message: "deleted device " + deviceId });
};

module.exports = {
  index,
  get,
  add,
  update,
  remove,
};
