const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const client = require("../helpers/init_redis");

const signAccessToken = (
  userId,
  role,
  username,
  firstName,
  lastName,
  avatarUrl
) => {
  const payload = { role, username, firstName, lastName, avatarUrl };
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const option = {
    expiresIn: "1h",
    issuer: "minigarden.com",
    audience: userId,
  };
  return jwt.sign(payload, secret, option);
};

const verifyAccessToken = (req, res, next) => {
  if (!req.headers.authorization) return next(createError.Unauthorized());

  const authHeader = req.headers.authorization;
  const bearerToken = authHeader.split(" ");
  const token = bearerToken[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      const message =
        err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
      return next(createError.Unauthorized(message));
    }
    req.payload = payload;
    next();
  });
};

const signRefreshToken = (userId) => {
  const payload = {};
  const secret = process.env.REFRESH_TOKEN_SECRET;
  const option = {
    expiresIn: "1y",
    issuer: "minigarden.com",
    audience: userId,
  };

  const token = jwt.sign(payload, secret, option);

  client.SET(
    userId,
    token,
    { EX: 365 * 24 * 60 * 60 },
    (err, reply) => {
      if (err) throw createError.InternalServerError();
      console.log(reply);
    }
  );

  return token;
};

const verifyRefreshToken = (refreshToken) => {
  let userId;
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
    if (err) throw createError.Unauthorized();
    userId = payload.aud;

    client.GET(userId, (err, result) => {
      if (err) {
        console.log(err.message);
        throw createError.InternalServerError();
      }
      if (refreshToken !== result) {
        throw createError.Unauthorized();
      }
    });
  });
  return userId;
};

module.exports = {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
};
