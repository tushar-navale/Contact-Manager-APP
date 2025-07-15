const asyncHandler  = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validTokenHandler = asyncHandler((req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        console.log("Token received:", token);
        if (!token) {
            res.status(401);
            throw new Error('User is not authorized, no token');
        }
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded.user;
            next();
        } catch (err) {
            res.status(401);
            throw new Error('User is not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('User is not authorized 2, no token');
    }
});

module.exports = validTokenHandler;