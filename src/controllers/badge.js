//create Badges
const db = require('../models');
const Badge = db.badge;

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


module.exports = {
  getBadges,
};
