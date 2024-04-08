const createError = require("http-errors");

const models = require("../models");
const {
  sensorUpdateSchema,
  sensorCreateSchema,
} = require("../helpers/validation_schema");
const { message } = require("statuses");

const index = async (req, res) => {
  const deviceId = req.deviceId;

  const sensors = await models.Sensor.findAll({
    where: { DeviceId: deviceId },
  });
  res.send(sensors);
};

const add = async (req, res, next) => {
  try {
    const SensorInfo = await sensorCreateSchema.validateAsync(req.body);

    const matchStock = await models.Stock.findByPk(SensorInfo.StockId);
    if (!matchStock) return next(createError.NotFound("Stock not found"));

    const savedSensor = await models.Sensor.create({
      DeviceId: req.deviceId,
      name: matchStock.name,
      ...SensorInfo,
    });

    res
      .status(201)
      .send({ code: 201, message: "Sensor added successfully", savedSensor });
  } catch (error) {
    next(error);
  }
};

const getSensor = async (req, res, next) => {
  const sensorId = req.params.sensorId;
  res.sensor = await models.Sensor.findByPk(sensorId, {
    include: {
      model: models.Stock,
      attributes: ["brand", "name", "description"],
    },
  });

  if (!res.sensor) return next(createError.NotFound("No sensor found"));
  next();
};

const get = async (req, res, next) => {
  res.send(res.sensor);
};

const update = async (req, res, next) => {
  try {
    const sensor = res.sensor;

    const sensorUpdate = await sensorUpdateSchema.validateAsync(req.body);

    if (Object.keys(sensorUpdate).length === 0) {
      return res.sendStatus(304);
    }

    sensor.set(sensorUpdate);
    await sensor.save();

    res.send({
      code: 200,
      message: "Sensor updated successfully",
      updatedSensor: sensor,
    });
  } catch (error) {
    if (error.isJoi) {
      next(createError.BadRequest("invalide infomation"));
    }
    next(error);
  }
};

const remove = async (req, res, next) => {
  const sensor = res.sensor;

  await sensor.destroy();
  res.send({
    code: 200,
    message: "sensor deleted successfully",
    deletedsensor: sensor,
  });
};

module.exports = {
  index,
  add,
  getSensor,
  get,
  update,
  remove,
};
