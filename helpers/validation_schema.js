const joi = require("@hapi/joi");

const authSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(8).required(),
  username: joi.string(),
  fullName: joi.string(),
  dateOfBirth: joi.date(),
});



module.exports = {
  authSchema,
};
