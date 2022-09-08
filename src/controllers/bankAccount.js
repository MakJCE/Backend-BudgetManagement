const db = require('../models');
const BankAccount = db.bankAccount;
const Convertion = db.convertion;

//create bankAccount
const createBankAccount = async (req, res) => {
  const body = { ...req.body, PersonId: req.person.id };
  BankAccount.create(body)
    .then((bankAccount) => {
      res.status(200).json({ message: 'Created' });
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

//Obtain bankAccounts
const getBankAccounts = async (req, res) => {
  BankAccount.findAll()
    .then((bankAccounts) => {
      res.status(200).json({ bankAccounts });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

//Obtain bankAccount
const getBankAccount = async (req, res) => {
  const id = Number(req.params.id);
  const idPerson = req.person.id;
  BankAccount.findOne({
    where: { id, PersonId: idPerson }
  })
    .then((bankAccount) => {
      res.status(200).json({ bankAccount });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

//Get badge percent
const getPercentValue = (from, to) => {
  Convertion.findOne({
    where: {
      badgeFrom: from,
      badgeTo: to
    }
  }).then((convertion) => {
    return convertion.percentValue;
  }).catch((error) => {
    return undefined;
  });
};

// deposit or extract found
const putAccountFound = (bankId, amount, badge, res) => {
  BankAccount.findOne({ where: { id: bankId } })
    .then((bankAccount) => {
      let percentValue = getPercentValue(badge, bankAccount.badge);
      let newFounds =
        bankAccount.dataValues.founds + (badge === bankAccount.badge)
          ? amount
          : amount * percentValue;
      bankAccount
        .update({ founds: newFounds })
        .then((ba) => {
          if (res) res.status(200).json({ ba });
        })
        .catch((error) => {
          if (res) res.status(500).json({ message: error });
        });
    })
    .catch((error) => {
      if (res) res.status(400).json({ message: error });
    });
};

module.exports = {
  createBankAccount,
  getBankAccounts,
  getBankAccount,
  putAccountFound
};
