const express = require('express');

const router = express.Router();

const {
  createBankAccount,
  getBankAccounts,
  getBankAccount
} = require('../controllers/bankAccount');

router.post('/bank-account', createBankAccount);

router.get('/bank-account', getBankAccounts);

router.get('/bank-account/:id', getBankAccount);

module.exports = router;
