const {authConfig} = require('../config/config.js');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, authConfig.key);
    if(decodedToken){
      req.person = decodedToken;
      return next();
    }
    return res.status(403).json({
      message: 'Unauthorized'
    });
  } catch (error) {
    return res.status(403).json({
      message: 'Unauthorized'
    });
  }
};
