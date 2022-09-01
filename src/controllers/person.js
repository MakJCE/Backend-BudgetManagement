const db = require('../models');
const { authConfig } = require('../config/config.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Person = db.person;

const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = await bcrypt.hash(body.password, 12);
    Person.create(body)
      .then((person) => {
        res.status(200).json({ message: 'Registered' });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

//Obtain categories
const login = (req, res) => {
  try {
    const body = req.body;
    Person.findOne({
      where: {
        username: body.username
      }
    })
      .then(async (person) => {
        const isValidPassword = await bcrypt.compare(
          body.password,
          person.password
        );
        if (isValidPassword) {
          const token = jwt.sign(
            {
              id: person.id,
              username: person.username,
              password: person.password
            },
            authConfig.key
          );
          res.status(200).json({
            message: 'Logged in successfully',
            token
          });
        } else {
          res.status(400).json({ message: 'Username or password incorrect.1' });
        }
      })
      .catch((error) => {
        res.status(400).json({ message: 'Username or password incorrect.2' });
      });
  } catch (error) {
    res.status(500).json({ message: 'Username or password incorrect.3' });
  }
};

//Obtain person
const getPerson = async (req, res) => {
  const id = Number(req.params.id);
  Person.findOne({ where: { id } })
    .then((person) => {
      res.status(200).json({ person });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

module.exports = {
  register,
  login,
  getPerson
};
