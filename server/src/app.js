const express = require("express");
const app = express();

require("./bin/env")();
require("./bin/cors")(app);
require("./bin/routes")(app);
require("./bin/db")();

module.exports = app;