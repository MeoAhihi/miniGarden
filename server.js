// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

// Routers
const userRoute = require("./src/routes/user");
const authRoute = require("./src/routes/auth");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(logger("dev"));

// Routes
// app.use("/users", userRoute);
app.use("/auth", authRoute);

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const port = app.get("port") || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
