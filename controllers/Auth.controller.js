const createError = require("http-errors");
const { Op } = require("sequelize");
const client = require("../helpers/init_redis");

const models = require("../models");
const { registerSchema, loginSchema } = require("../helpers/validation_schema");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../helpers/jwt_helper");

const register = async (req, res, next) => {
  try {
    const result = await registerSchema.validateAsync(req.body);

    const doesExist = await models.User.findOne({
      where: {
        [Op.or]: [{ email: result.email }, { username: result.username }],
      },
    });
    if (doesExist)
      throw createError.Conflict("Email or Username is already registered");

    result.passwordHash = result.password;
    const newUser = await models.User.build(result);
    const savedUser = await newUser.save();

    const accessToken = signAccessToken(
      savedUser.id,
      "user",
      savedUser.username,
      savedUser.firstName,
      savedUser.lastName,
      process.env.DEFAULT_AVATAR_URL
    );
    const refreshToken = signRefreshToken(savedUser.id);

    res.send({ accessToken, refreshToken });
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await loginSchema.validateAsync(req.body);

    const user = await models.User.findOne({ where: { email: result.email } });
    if (!user) throw createError.NotFound("User not registered");

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) throw createError.Unauthorized("Invalid Email/Password");

    const accessToken = signAccessToken(
      user.id,
      user.role,
      user.username,
      user.firstName,
      user.lastName,
      user.avatarUrl
    );
    const refreshToken = signRefreshToken(user.id);

    res.send({ accessToken, refreshToken });
  } catch (error) {
    if (error.isJoi) next(createError.BadRequest("Invalid Email/Password"));
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const userId = verifyRefreshToken(refreshToken);

    const user = await models.User.findByPk(userId);

    const accessToken = signAccessToken(
      userId,
      user.role,
      user.username,
      user.firstName,
      user.lastName,
      user.avatarUrl
    );
    const refToken = signRefreshToken(userId);
    res.send({ accessToken, refreshToken: refToken });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();

    const userId = verifyRefreshToken(refreshToken);

    const value = await client.DEL(userId);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  refreshToken,
  logout,
};
