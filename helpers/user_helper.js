const createError = require("http-errors");

const models = require("../models");

const getUser = async (req, res, next) => {
  const userId = req.payload.aud;
  const user = await models.User.findByPk(userId);
  if (!user) next(createError.NotFound("User not found"));
  req.user = user;
  next();
};

const roleIs = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      next(createError.Forbidden("User isn't allowed"));
    }
    next();
  };
};

module.exports = {
  getUser,
  roleIs,
};
