"use strict";

const express = require("express");
const app = express();

const home = require("./route/home/index");


app.use("/", home);
module.exports = app;