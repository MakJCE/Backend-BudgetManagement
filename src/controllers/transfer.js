const db = require('../models');
const { putAccountFound } = require('./bankAccount.js');
const Transfer = db.transfer;

//create transfer
const createTransfer = async (req, res) => {
  const body = {...req.body, PersonId: req.person.id};
  Transfer.create(body)
    .then(async (transfer) => {
      var receiverBank = await putAccountFound(
        transfer.receiverAccount,
        transfer.amount,
        transfer.BadgeId
      );
      var senderBank = await putAccountFound(
        transfer.senderAccount,
        -1 * transfer.amount,
        transfer.BadgeId
      );
      if (receiverBank.error || senderBank.error) {
        res.status(400).json({ message: "Failed to update banks founds." });
      } else {
        res.status(200).json({ receiverBank, senderBank, transfer });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

//Obtain transfers
const getTransfers = async (req, res) => {
  Transfer.findAll({ where: { PersonId: req.person.id } })
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
