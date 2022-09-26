//create Badges
const db = require('../models');
const Badge = db.badge;
const Convertion = db.convertion;

//Obtain Badges
const getBadges = async (req, res) => {
  Badge.findAll()
    .then((badges) => {
      res.status(200).json({ badges });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

const createBadge = async (req, res) => {
  const body = req.body;
  Badge.create(body)
    .then((badge) => {
      res.status(200).json({ message: 'Created' });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const createConvertion = async (req, res) => {
  const body = req.body;
  Convertion.create(body)
    .then((convertion) => {
      res.status(200).json({ message: 'Created' });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getBadges,
  createBadge,
  createConvertion
};
