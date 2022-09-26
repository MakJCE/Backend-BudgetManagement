const express = require('express');
const guard = require('../guard/guard');

const router = express.Router();

const {
  getBadges,
  createBadge,
  createConvertion
} = require('../controllers/badge');

router.get('/badge', guard, getBadges);
router.post('/badge', guard, createBadge);
router.post('/badge/convertion', guard, createConvertion);

module.exports = router;
