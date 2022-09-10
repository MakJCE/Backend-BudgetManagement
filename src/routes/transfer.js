const express = require('express');
const guard = require('../guard/guard');

const router = express.Router();

const {
  createTransfer,
  getTransfers,
  getTransfer
} = require('../controllers/transfer');

router.post('/transfer', guard, createTransfer);

router.get('/transfer', guard, getTransfers);

router.get('/transfer/:id', guard, getTransfer);

module.exports = router;
