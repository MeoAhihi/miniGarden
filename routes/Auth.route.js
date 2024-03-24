const express = require("express");
const createError = require("http-errors");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const models = require("../models");
const { authSchema } = require("../helpers/validation_schema");
const { signAccessToken } = require("../helpers/jwt_helper");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    // const { fullName, email, username, dateOfBirth, passwordHash } = req.body;
    // if (!(fullName && email && username && dateOfBirth && passwordHash)) {
    //   throw createError.BadRequest("Missing fields of registation");
    // }
    const result = await authSchema.validateAsync(req.body);

    const doesExist = await models.User.findOne({
      where: {
        [Op.or]: [{ email: result.email }, { username: result.username }],
      },
    });
    if (doesExist)
      throw createError.Conflict("Email or Username is already registered");

    const salt = await bcrypt.genSalt(10);

    result.passwordHash = await bcrypt.hash(result.password, salt);
    delete result.password;

    const newUser = await models.User.build(result);
    const savedUser = await newUser.save();
    const accessToken = signAccessToken(savedUser.id);

    res.send(accessToken);
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
});

router.post("/login", (req, res, next) => {
  res.send("login");
});

router.post("/refresh-token", (req, res, next) => {
  res.send("refresh-token");
});

router.delete("/logout", (req, res, next) => {
  res.send("logout");
});

router.post("/reset-password", (req, res, next) => {
  console.log("rest password");
});

module.exports = router;
