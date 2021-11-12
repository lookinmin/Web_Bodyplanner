"use strict";

const express = require("express");
const app = express();

const home = require("./route/home/index");

app.use(express.json());
app.use(express.static(`${__dirname}/HTML`));

app.use("/", home);
module.exports = app;