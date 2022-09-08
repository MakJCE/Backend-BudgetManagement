const express = require('express');

const router = express.Router();

const {
  createTransfer,
  getTransfers,
  getTransfer
} = require('../controllers/transfer');

router.post('/transfer', createTransfer);

router.get('/transfer', getTransfers);

router.get('/transfer/:id', getTransfer);

module.exports = router;
