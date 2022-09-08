const express = require('express');

const router = express.Router();

const {
  createMovement,
  getMovements,
  getMovement
} = require('../controllers/movement');

router.post('/movement', createMovement);

router.get('/movement', getMovements);

router.get('/movement/:id', getMovement);

module.exports = router;
