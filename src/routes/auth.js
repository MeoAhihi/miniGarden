const express = require("express");

const router = express.Router();

const {
  login,
  logout,
  register,
  resetPassword,
    verifyEmail,
  refreshToken
} = require("../controllers/auth");

router.post("/login", login);
router.post("/logout", logout);

router.post("/register", register);
router.post("/reset-password", resetPassword);
router.post("/verify-email", verifyEmail);
router.post("/refresh-token", refreshToken);

module.exports = router