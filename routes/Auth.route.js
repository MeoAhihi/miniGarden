const express = require("express");

const AuthController = require("../controllers/Auth.controller");
const { comingSoon } = require("../helpers/coming_soon");
const router = express.Router();

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/refresh-token", AuthController.refreshToken);

router.delete("/logout", AuthController.logout);

router.post("/reset-password", comingSoon('Reset Password'));

module.exports = router;
