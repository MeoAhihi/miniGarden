const createError = require("http-errors");

const comingSoon = (feature) => {
  return (req, res, next) => {
    throw createError.ServiceUnavailable(feature + " coming soon...");
  };
};

module.exports = { comingSoon };
