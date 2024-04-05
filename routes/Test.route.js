const express = require("express");
const { verifyAccessToken } = require("../helpers/jwt_helper");
const { getUser } = require("../helpers/user_helper");
const router = express.Router();

router.get("/payload", verifyAccessToken, (req, res) => {
  res.send(req.payload);
});

router.get("/user", verifyAccessToken, getUser, (req, res) => {
  res.send(req.user);
});

router.get("/user/inside", verifyAccessToken, getUser, (req, res) => {
  for (i in req.user) {
    console.log(i, req.user[i]);
  }
  res.send(req.user);
});

module.exports = router;
