const db = require('../models');
const { putAccountFound } = require('./bankAccount.js');
const Movement = db.movement;
const Category = db.category;
const BankAccount = db.bankAccount;

//create movement
const createMovement = async (req, res) => {
  const body = { ...req.body, PersonId: req.person.id };
  Movement.create(body)
    .then(async (movement) => {
      var updatedBank = await putAccountFound(
        movement.BankAccountId,
        movement.type === 'income' ? movement.amount : -1 * movement.amount,
        movement.BadgeId
      );
      if (updatedBank.error) {
        res.status(400).json({ message: updatedBank.message });
      } else {
        res.status(200).json({ updatedBank, movement });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

//Obtain movements
const getMovements = async (req, res) => {
  Movement.findAll()
    .then((movements) => {
      res.status(200).json({ movements });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

//Obtain movement
const getMovement = async (req, res) => {
  const id = Number(req.params.id);
  const idPerson = req.person.id;
  Movement.findOne({
    where: { id, PersonId: idPerson },
    include: [
      {
        model: Category
      },
      {
        model: BankAccount
      }
    ]
  })
    .then((movement) => {
      res.status(200).json({ movement });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

module.exports = {
  createMovement,
  getMovements,
  getMovement
};
