const express = require("express");
const server = express();
const configureMiddleware = require("../config/middleware");

configureMiddleware(server);

// server.use('dish', dishRouter)
// server.use('recipe', recipeRouter)

module.exports = server;
