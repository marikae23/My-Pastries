// backend/middleware/checkAuth.js

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Formato esperado: Bearer tokenString
    const decodedToken = jwt.verify(token, config.jwtSecret);
    req.userData= { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Falha na autenticação.' });
  }
};

