const express = require('express');
const guard = require('../guard/guard');

const router = express.Router();

const {
  createMovement,
  getMovements,
  getMovement
} = require('../controllers/movement');

router.post('/movement', guard, createMovement);

router.get('/movement', guard, getMovements);

router.get('/movement/:id', guard, getMovement);

module.exports = router;
