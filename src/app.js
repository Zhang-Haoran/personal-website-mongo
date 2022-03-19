const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const db = require('./utils/db');

const app = express();
app.use(logger('dev'));
app.use(express.json());

db.connectToDB();
module.exports = app;
