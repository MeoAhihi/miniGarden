const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const signAccessToken = (userId) => {
  const payload = {
    id: userId,
  };
  const secret = "secret";
  const option = {};
  return jwt.sign(payload, secret, option);
};

module.exports = { signAccessToken };
