const express = require('express');
const router = express.Router();
const guard = require('../guard/guard');

const {
    register,
    login,
    getPerson
  } = require('../controllers/person');
  
  router.post('/person/login', login);
  
  router.post('/person/register', register);
  
  router.get('/person', guard, getPerson);

  module.exports = router;