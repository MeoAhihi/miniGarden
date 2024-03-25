const express = require("express");

const AuthController = require("../controllers/Auth.controller");
const router = express.Router();

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/refresh-token", AuthController.refreshToken);

router.delete("/logout", AuthController.logout);

router.post("/reset-password", (req, res, next) => {
  console.log("rest password");
});

module.exports = router;
