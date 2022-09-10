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
      res.status(400).json({ message: err.message });
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
  return Convertion.findOne({
    where: {
      badgeFrom: from,
      badgeTo: to
    }
  });
};

// deposit or extract found
const putAccountFound = (bankId, amount, badge) => {
  return new Promise((resolve, reject) => {
    BankAccount.findOne({ where: { id: bankId } })
      .then(async (bankAccount) => {
        let percentValue = await getPercentValue(badge, bankAccount.BadgeId),
          newFounds = 0.0;
        if (percentValue) {
          percentValue = percentValue.percentValue;
          newFounds = bankAccount.dataValues.founds + amount * percentValue;
        } else {
          newFounds = bankAccount.dataValues.founds + amount;
        }
        bankAccount
          .update({ founds: newFounds })
          .then((ba) => {
            resolve({ ba });
          })
          .catch((error) => {
            reject({ error: true, message: error });
          });
      })
      .catch((error) => {
        reject({ error: true, message: error });
      });
  });
};

module.exports = {
  createBankAccount,
  getBankAccounts,
  getBankAccount,
  putAccountFound
};
