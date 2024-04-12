const express = require("express");
const expressWs = require("express-ws");
const router = express.Router();

const routerWs = expressWs(router);
const clients = routerWs.getWss().clients;

router.ws("/", (ws, req) => {
  ws.send("Connected");

  ws.on("close", (msg) => {
    console.log("disconnected");
  });

  ws.on("message", (msg) => {
    req.clients.forEach((client) => client.send(msg));
  }); 
});

module.exports = router;
