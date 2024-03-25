const redis = require("redis");

const client = redis.createClient();

client.on("connect", () => {
  console.log("Client connected to Redis and ready to use");
});

client.on("ready", () => {
  console.log("Client connected to Redis...");
});

client.on("error", (err) => {
  console.log(err.messege);
});

client.on("end", () => {
  console.log("Client disconnected from Redis");
});

process.on("SIGINT", () => {
  client.quit();
});

client.connect()

module.exports = client;
