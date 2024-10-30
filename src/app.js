const express = require('express');
const MONGODB = require("./Repository/MongoDB");
require('dotenv').config();
MONGODB();
const app = express();

module.exports = app;