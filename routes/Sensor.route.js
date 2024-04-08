const express = require("express");
const router = express.Router();

const SensorController = require("../controllers/Sensor.controller");

router.route("/").get(SensorController.index).post(SensorController.add);

router.route("/:sensorId")
  .all(SensorController.getSensor)
  .get(SensorController.get)
  .patch(SensorController.update)
  .delete(SensorController.remove);

// router.get(
//   "/:id",
//   verifyAccessToken,
//   getUser,
//   SensorController.getSensor,
//   SensorController.getDevice,
//   DeviceController.authViewDevice,
//   SensorController.showSensor
// );

module.exports = router;
