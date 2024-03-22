const { expression } = require("joi");

const User = require("../models/user");

const index = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json({ users });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  if (bcrypt.compareSync(password, user.password)) {
    // Successful login
    // Here, you would typically generate and send a token for authentication
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid username or password" });
};

module.exports = {
  login,
};
