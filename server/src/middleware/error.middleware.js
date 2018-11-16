//const winston = require("winston");

function handleError(err, req, res, next) {
    //winston.error(err.message, err);
    console.log(err);
    res.status(500).send("Oops, something blew up.");
}

exports.handleError = handleError;