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

module.exports = router;
