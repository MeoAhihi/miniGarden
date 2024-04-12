const express = require("express");
const expressWs = require("express-ws");
const logger = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const { verifyAccessToken } = require("./helpers/jwt_helper");
const {
  getUser,
  authUserDevice,
  authDeviceSensor,
  authDeviceControlUnit,
} = require("./helpers/user_helper");
const TestRoute = require("./routes/Test.route");
const AuthRoute = require("./routes/Auth.route");
const DeviceRoute = require("./routes/Device.route");
const UserRoute = require("./routes/User.route");
const SensorRoute = require("./routes/Sensor.route");
const ControlUnitRoute = require("./routes/ControlUnit.route");
const SensorReadingRoute = require("./routes/SensorReading.route");
const CommandRoute = require("./routes/Command.route");

const app = express();
const appWs = expressWs(app);
// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/test", TestRoute);
app.use("/auth", AuthRoute);
app.use("/user", verifyAccessToken, getUser, UserRoute);
app.use("/user/device", verifyAccessToken, DeviceRoute);
app.use(
  "/user/device/:deviceId/sensor",
  verifyAccessToken,
  authUserDevice,
  SensorRoute
);
app.use(
  "/user/device/:deviceId/control-unit",
  verifyAccessToken,
  authUserDevice,
  ControlUnitRoute
);
app.use(
  "/user/device/:deviceId/sensor/:sensorId/reading",
  verifyAccessToken,
  authUserDevice,
  authDeviceSensor,
  SensorReadingRoute
);

app.use(
  "/ws",
  (req, res, next) => {
    req.clients = appWs.getWss().clients;
    next();
  },
  // verifyAccessToken,
  // authUserDevice,
  // authDeviceControlUnit,
  CommandRoute
);

app.ws("/wsx", (ws, req) => {
  console.log(appWs.getWss().clients);
});

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
