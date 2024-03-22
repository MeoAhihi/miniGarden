const bcrypt = require("bcrypt");
const createError = require("http-errors");

const models = require("../../models");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await models.User.findAll({ where: { email: email } });
    if (!user) {
      throw createError.Unauthorized("Invalid credentails [email]");
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      throw createError.Unauthorized("Invalid credentails [password]");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "your_secret_key", {
      expiresIn: "1h",
    });

    // Send token in response
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
const logout = (req, res) => {
  res.json("Logout");
};
const register = (req, res) => {
  res.json("Register");
};
const resetPassword = (req, res) => {
  res.json("Reset Password");
};
const verifyEmail = (req, res) => {
  res.json("Verify Email");
};
const refreshToken = (req, res) => {
  res.json("Refresh Token");
};

module.exports = {
  login,
  logout,
  register,
  resetPassword,
  verifyEmail,
  refreshToken,
};
