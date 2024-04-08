const express = require("express");
const router = express.Router();

const DeviceController = require("../controllers/Device.controller");

/**
 * /user route require req.payload
 * (contain auth info) to work
 *
 * wherever you use this route,
 * remember middlewares verifyAccessToken
 */

router.route("/").get(DeviceController.index).post(DeviceController.add);

router
  .route("/:deviceId")
  .all(DeviceController.getDevice)
  .get(DeviceController.get)
  .patch(DeviceController.update)
  .delete(DeviceController.remove);

module.exports = router;
