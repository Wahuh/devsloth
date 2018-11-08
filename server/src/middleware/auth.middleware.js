const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (exception) {
        res.status(400).send("Invalid token");
    }
}

exports.auth = authenticateToken;