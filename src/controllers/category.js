//create categories
const db = require('../models');
const Category = db.category;

const createCategory = async (req, res) => {
  const body = req.body;
  Category.create(body)
    .then((category) => {
      res.status(200).json({ message: 'Created' });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Obtain categories
const getCategories = async (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).json({ categories });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

//Obtain category
const getCategory = async (req, res) => {
  const id = Number(req.params.id);
  Category.findOne({ where: { id } })
    .then((category) => {
      res.status(200).json({ category });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

module.exports = {
  createCategory,
  getCategories,
  getCategory
};
