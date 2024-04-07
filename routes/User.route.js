const express = require("express");
const router = express.Router();

const UserController = require("../controllers/User.controller");

/**
 * /user route require req.payload (contain auth info)
 * and req.user (contain user info) to work
 *
 * wherever you use this route, remember middlewares
 * verifyAccessToken and getUser
 */

router
  .route("/")
  .get(UserController.selfReference)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
