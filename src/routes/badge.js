const express = require('express');
const guard = require('../guard/guard');

const router = express.Router();

const {
  getBadges
} = require('../controllers/badge');

router.get('/badge', guard, getBadges);

module.exports = router;
