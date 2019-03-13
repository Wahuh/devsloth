const express = require("express");
const apiRouter = require("../routes/api");
//const { handleError } = require("../middleware/error.middleware");

module.exports = function(app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use("/api", apiRouter);
    //app.use(handleError);
}