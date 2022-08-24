const db = require('../utils/db');

const create = (category) => {
  return new Promise((resolve, reject) => {
    try {
      db.push(category);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
const fetchAll = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });
};
const findById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(db.find(c=>c.category === id));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  create,
  fetchAll,
  findById
};
