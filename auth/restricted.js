const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token){
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) =>{
            if (err) {
                res.status(401).json({ message: 'You are missing a token in the headers with the key authorization'})
            } else {
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'Something went wrong with the token...'})
    }
}