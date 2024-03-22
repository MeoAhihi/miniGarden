const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const AuthRoute = require("./routes/Auth.route");

const app = express();

// MIddlewares
app.use(logger("dev"));

//Routes
app.use("/auth", AuthRoute);

//Error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is on http://localhost:" + port);
});
