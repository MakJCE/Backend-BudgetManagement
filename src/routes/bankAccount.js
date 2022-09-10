const express = require('express');
const guard = require('../guard/guard');

const router = express.Router();

const {
  createBankAccount,
  getBankAccounts,
  getBankAccount
} = require('../controllers/bankAccount');

router.post('/bank-account', guard, createBankAccount);

router.get('/bank-account', guard, getBankAccounts);

router.get('/bank-account/:id', guard, getBankAccount);

module.exports = router;
