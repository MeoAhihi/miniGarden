const express = require("express");
const router = express.Router();

const DeviceController = require("../controllers/Device.controller");
const { verifyAccessToken } = require("../helpers/jwt_helper");
const { getUser } = require("../helpers/user_helper");

// Make sure user loged in and get their id
router.use(verifyAccessToken);
// Review the user
router.use(getUser);

router.get("/", DeviceController.index);

router.get("/:id", DeviceController.get);

router.post("/", DeviceController.add);

router.put("/:id", DeviceController.update);

router.delete("/:id", DeviceController.remove);

module.exports = router;
