const createError = require("http-errors");
const { Op } = require("sequelize");

const client = require("../helpers/init_redis");
const User = require("../models").User;
const { authSchema, updateSchema } = require("../helpers/validation_schema");

const getUser = async (req, res, next) => {
  const userId = req.params.id;

  res.user = await User.findByPk(userId);
  next();
};

const authViewUser = (req, res, next) => {
  const viewer = req.user;

  if (!res.user?.canViewUser(viewer)) {
    next(createError.Forbidden());
  }
  next();
};

const authModifyUser = async (req, res, next) => {
  const viewer = req.user;

  if (!res.user?.canModifyUser(viewer)) {
    next(createError.Forbidden());
  }

  next();
};

const selfReference = async (req, res, next) => {
  res.json(req.user);
};

const getAllUser = async (req, res, next) => {
  const users = await User.findAll({});
  res.json(users);
};

const createUser = async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const doesExist = await User.findOne({
      where: {
        [Op.or]: [{ email: result.email }, { username: result.username }],
      },
    });
    if (doesExist)
      throw createError.Conflict("Email or Username is already registered");

    result.passwordHash = result.password;

    const newUser = await User.build(result);
    const savedUser = await newUser.save();
    console.log(result);

    res
      .status(201)
      .json({ code: 200, message: "New user created successfully", savedUser });
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};
const getUserById = (req, res, next) => {
  res.json(res.user);
};
const updateUser = async (req, res, next) => {
  try {
    const updateInfo = await updateSchema.validateAsync(req.body);
    req.user.set(updateInfo);
    await req.user.save();
    res.json({
      code: 200,
      message: "User updated successfully",
      savedUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.user.id;

    await client.DEL(userId);

    req.user.destroy();

    res.send({
      code: 200,
      message: "User deleted successfully",
      deletedUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getUser,
  authViewUser,
  authModifyUser,
  selfReference,
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
