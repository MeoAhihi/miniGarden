 const createError = require("http-errors");

const models = require("../models");

// const canView = (req, res, next) => {
//   const device = undefined;
//   if (!device.canView(req.user))
//     next(createError.Forbidden("User isn't allowed to view device"));
//   next();
// };

// const canModify = (req, res, next) => {
//   const device = undefined;
//   if (!device.canModify(req.user))
//     next(createError.Forbidden("User isn't allowed to view device"));
//   next();
// };

const index = async (req, res) => {
  const devices = req.user.getDevices()
};

const get = async (req, res) => {
  const deviceId = req.params.id;
  res.send("show device " + deviceId);
};

const add = async (req, res) => {
  const DeviceInfo = req.body;
  console.log(DeviceInfo);
  res.send("created device :" + JSON.stringify(DeviceInfo));
};

const remove = async (req, res) => {
  const deviceId = req.params.id;
  res.send("deleted device " + deviceId);
};

module.exports = {
  // canView,
  // canModify,
  index,
  get,
  add,
  remove,
};
