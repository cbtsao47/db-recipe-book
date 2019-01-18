const express = require("express");
const server = express();
const configureMiddleware = require("../config/middleware");
const dishRouter = require("../routes/dishRouter");
const recipeRouter = require("../routes/recipeRouter");

configureMiddleware(server);

server.use("/dishes", dishRouter);
server.use("/recipes", recipeRouter);

module.exports = server;
