const express = require("express");
const router = express.Router();

const { verifyAccessToken } = require("../helpers/jwt_helper");
const { getUser, roleIs } = require("../helpers/user_helper");

const UserController = require("../controllers/User.controller");

router
  .route("/admin/")
  .all(verifyAccessToken, getUser, roleIs("admin"))
  .get(UserController.getAllUser)
  .post(UserController.createUser);
router.route("/").get(verifyAccessToken, getUser, UserController.selfReference);
router
  .route("/:id")
  .all(verifyAccessToken, getUser, UserController.getUser)
  .get(UserController.authViewUser, UserController.getUserById)
  .patch(UserController.authModifyUser, UserController.updateUser)
  .delete(UserController.authModifyUser, UserController.deleteUser);

module.exports = router;
