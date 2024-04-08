const express = require("express");
const router = express.Router();

const models = require("../models");
const { Op } = require("sequelize");

// const SensorReadingController = require("../controllers/SensorReading.controller");

router.get("/", async (req, res, next) => {
  const { from, to } = req.query;

  const sensorReadings = await models.SensorReading.findAll({
    where: {
      createdAt: {
        [Op.between]: [from, to],
      },
    },
  });

  res.send(sensorReadings);
});

module.exports = router;
