const express = require('express');
const api = express.Router();
const v1Router = require('./v1');

api.use('/v1', v1Router);

module.exports = api;