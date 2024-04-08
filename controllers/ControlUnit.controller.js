const createError = require("http-errors");

const models = require("../models");
const {
  controlUnitUpdateSchema,
  controlUnitCreateSchema,
} = require("../helpers/validation_schema");

const index = async (req, res) => {
  const deviceId = req.deviceId;

  const controlUnits = await models.ControlUnit.findAll({
    where: { DeviceId: deviceId },
  });
  res.send(controlUnits);
};

const add = async (req, res, next) => {
  try {
    const controlUnitInfo = await controlUnitCreateSchema.validateAsync(req.body);

    const matchStock = await models.Stock.findByPk(controlUnitInfo.StockId);
    if (!matchStock) return next(createError.NotFound("Stock not found"));

    const savedControlUnit = await models.ControlUnit.create({
      DeviceId: req.deviceId,
      name: matchStock.name,
      ...controlUnitInfo,
    });

    res
      .status(201)
      .send({ code: 201, message: "Control Unit added successfully", savedControlUnit });
  } catch (error) {
    next(error);
  }
};

const getControlUnit = async (req, res, next) => {
  const controlUnitId = req.params.controlUnitId;
  res.controlUnit = await models.ControlUnit.findByPk(controlUnitId, {
    include: {
      model: models.Stock,
      attributes: ["brand", "name", "description"],
    },
  });

  if (!res.controlUnit) return next(createError.NotFound("No Control Unit found"));
  next();
};

const get = async (req, res, next) => {
  res.send(res.controlUnit);
};

const update = async (req, res, next) => {
  try {
    const controlUnit = res.controlUnit;

    const controlUnitUpdate = await controlUnitUpdateSchema.validateAsync(req.body);

    if (Object.keys(controlUnitUpdate).length === 0) {
      return res.sendStatus(304);
    }

    controlUnit.set(controlUnitUpdate);
    await controlUnit.save();

    res.send({
      code: 200,
      message: "Control Unit updated successfully",
      updatedcontrolUnit: controlUnit,
    });
  } catch (error) {
    if (error.isJoi) {
      next(createError.BadRequest("invalide infomation"));
    }
    next(error);
  }
};

const remove = async (req, res, next) => {
  const controlUnit = res.controlUnit;

  await controlUnit.destroy();
  res.send({
    code: 200,
    message: "Control Unit deleted successfully",
    deletedcontrolUnit: controlUnit,
  });
};

module.exports = {
  index,
  add,
  getControlUnit,
  get,
  update,
  remove,
};
