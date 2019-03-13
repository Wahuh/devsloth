const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const bearerToken = req.header("Authorization");
    console.log("bearer", bearerToken);
    if (!bearerToken) return res.status(401).send("Access denied. No token provided.");

    if (bearerToken.startsWith("Bearer ")) {
        token = bearerToken.substring(7, bearerToken.length);
    } else {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        req.user = payload;
        next();
    } catch (exception) {
        res.status(401).send("Access denied. Invalid token.");
    }
}

exports.auth = authenticateToken;