const joi = require("@hapi/joi");

const registerSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email().lowercase().required(),
  dateOfBirth: joi.date(),
  firstName: joi.string(),
  lastName: joi.string(),
});

const loginSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi.string().required(),
});

const authSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().min(8).required(),
  email: joi.string().email().lowercase().required(),
  role: joi.string().valid("user", "moderator", "admin", "supporter"),
  firstName: joi.string(),
  lastName: joi.string(),
  dateOfBirth: joi.date(),
  gender: joi.string().valid("male", "female", "other"),
  profile: joi.string().uri(),
  phoneNumber: joi.string().regex(/\d*$/).min(10),
  address: joi.string(),
  city: joi.string(),
  district: joi.string(),
  country: joi.string(),
  postalCode: joi.string().regex(/\d*$/),
  bio: joi.string(),
});

const updateSchema = joi.object({
  email: joi.string().email().lowercase(),
  username: joi.string(),
  // role: joi.string().valid("user", "moderator", "admin", "supporter"),
  firstName: joi.string(),
  lastName: joi.string(),
  dateOfBirth: joi.date(),
  gender: joi.string().valid("male", "female", "other"),
  phoneNumber: joi.string().regex(/\d*$/).min(10),
  address: joi.string(),
  city: joi.string(),
  district: joi.string(),
  country: joi.string(),
  postalCode: joi.string().regex(/\d*$/),
  bio: joi.string(),
});

const deviceUpdateSchema = joi.object({
  name: joi.string(),
  BSmode: joi.string().valid("schedule", "balancer"),
});

module.exports = {
  registerSchema,
  loginSchema,
  authSchema,
  updateSchema,
  deviceUpdateSchema,
};
