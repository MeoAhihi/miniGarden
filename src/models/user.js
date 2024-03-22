const mysql = require("mysql");

// Create MySQL connection pool
const connection = mysql.createConnection({
  host: "localhost",
  user: "minigarden",
  password: "gardening",
  database: "minigarden",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

findUserByEmail = (email, callback) => {
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error("Error querying database:", error);
        return callback(error, null);
      }
      if (results.length === 0) {
        return callback(null, null); // User not found
      }
      return callback(null, results[0]);
    }
  );
};

// User model
const User = {
  // Function to create a new user
  async create(username, password, salt, email, fullname) {
    try {
      const hashedPassword = bcrypt.hashSync(salt + password);
      const result = await query(
        "INSERT INTO users (username, password_hash, email, salt, full_name) VALUES (?, ?, ?, ?, ?)",
        [username, hashedPassword, email, salt, fullname]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  // Function to find a user by username
  async findByUsername(username) {
    try {
      const rows = await query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      return rows[0]; // Assuming username is unique
    } catch (error) {
      throw error;
    }
  },

  // Function to compare password hashes
  comparePasswords(plainPassword, salt, hashedPassword) {
    return bcrypt.compareSync(salt + plainPassword, hashedPassword);
  },
};

module.exports = { findUserByEmail };
