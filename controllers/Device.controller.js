
const createError = require("http-errors");

const models = require("../models");
const {
  deviceUpdateSchema,
  deviceCreateSchema,
} = require("../helpers/validation_schema");

const authViewDevice = async (req, res, next) => {
  const user = req.user;
  if (!res.device?.canView(user)) {
    return next(createError.Forbidden("User unable to view device"));
  }
  next();
};

const authModifyDevice = async (req, res, next) => {
  const user = req.user;
  if (!res.device?.canModify(user)) {
    return next(createError.Forbidden("User unable to view device"));
  }
  next();
};

const index = async (req, res) => {
  const userId = req.payload.aud;
  const devices = await models.Device.findAll({
    where: { UserId: userId },
  });
  res.send(devices);
};

const getDevice = async (req, res, next) => {
  const deviceId = req.params.deviceId;
  res.device = await models.Device.findByPk(deviceId, {
    include: {
      model: models.Stock,
      attributes: ["brand", "name", "description"],
    },
  });

  if (!res.device) return next(createError.NotFound("No device found"));
  if (!res.device.canView(req.user))
    return next(createError.Forbidden("User unable to access device"));
  next();
};

const get = async (req, res, next) => {
  res.send(res.device);
};

const add = async (req, res, next) => {
  try {
    const DeviceInfo = await deviceCreateSchema.validateAsync(req.body);

    const matchStock = await models.Stock.findByPk(DeviceInfo.StockId);
    if (!matchStock) return next(createError.NotFound("Stock not found"));

    const savedDevice = await models.Device.create({
      UserId: req.payload.aud,
      name: matchStock.name,
      BSmode: "schedule",
      ...DeviceInfo,
    });

    res
      .status(201)
      .send({ code: 201, message: "Device added successfully", savedDevice });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const device = res.device;

    const deviceUpdate = await deviceUpdateSchema.validateAsync(req.body);

    if (Object.keys(deviceUpdate).length === 0) {
      return res.sendStatus(304);
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
  const device = res.device;

  if (!device.canModify(req.user)) {
    return next(createError.Forbidden("User isn't allowed to delete device"));
  }

  await device.destroy();
  res.send({
    code: 200,
    message: "Device deleted successfully",
    deletedDevice: device,
  });
};

module.exports = {
  authViewDevice,
  authModifyDevice,
  index,
  get,
  getDevice,
  add,
  update,
  remove,
};
