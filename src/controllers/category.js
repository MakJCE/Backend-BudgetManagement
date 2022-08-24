//create categories
const Category = require('../models/category');

const createCategory = async (req, res, next) => {
  const body = req.body;
  try {
    await Category.create(body);
    res.status(200).json({ message: 'Created' });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Obtain categories
const getCategories = async (req, res, next) => {
  try {
    res.status(200).json({ categories: await Category.fetchAll() });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Obtain category
const getCategory = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    res.status(200).json({ category: await Category.findById(id) });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory
};
