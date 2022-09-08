const db = require('../models');
const { putAccountFound } = require('./bankAccount.js');
const Transfer = db.transfer;

//create transfer
const createTransfer = async (req, res) => {
  const body = {...req.body, PersonId: req.person.id};
  Transfer.create(body)
    .then((transfer) => {
      putAccountFound(
        transfer.senderAccount,
        -1 * transfer.amount,
        transfer.badge
      );
      putAccountFound(
        transfer.receiverAccount,
        transfer.amount,
        transfer.badge,
        res
      );
      res.status(200).json({ message: 'Created' });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Obtain transfers
const getTransfers = async (req, res) => {
  Transfer.findAll()
    .then((transfers) => {
      res.status(200).json({ transfers });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

//Obtain transfer
const getTransfer = async (req, res) => {
  const id = Number(req.params.id);
  const idPerson = req.person.id;
  Transfer.findOne({
    where: { id, PersonId: idPerson }
  })
    .then((transfer) => {
      res.status(200).json({ transfer });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

module.exports = {
  createTransfer,
  getTransfers,
  getTransfer
};
