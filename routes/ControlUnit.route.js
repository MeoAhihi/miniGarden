const express = require("express");
const router = express.Router();

const ControlUnitController = require("../controllers/ControlUnit.controller");

router.route("/").get(ControlUnitController.index).post(ControlUnitController.add);

router.route("/:controlUnitId")
  .all(ControlUnitController.getControlUnit)
  .get(ControlUnitController.get)
  .patch(ControlUnitController.update)
  .delete(ControlUnitController.remove);

module.exports = router;
