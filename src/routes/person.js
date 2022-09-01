const express = require('express');
const router = express.Router();

const {
    register,
    login,
  } = require('../controllers/person');
  
  router.post('/person/login', login);
  
  router.post('/person/register', register);
  
  module.exports = router;