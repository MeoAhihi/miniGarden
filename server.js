const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const TestRoute = require("./routes/Test.route");
const AuthRoute = require("./routes/Auth.route");
const DeviceRoute = require("./routes/Device.route");
const UserRoute = require("./routes/User.route");
const { verifyAccessToken } = require("./helpers/jwt_helper");
const { getUser } = require("./helpers/user_helper");
// const SensorRoute = require("./routes/Sensor.route");

const app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/test", TestRoute);
app.use("/auth", AuthRoute);
app.use("/user", verifyAccessToken, getUser, UserRoute);
app.use("/user/device", DeviceRoute);
// app.use("/user/sensor", SensorRoute);

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
