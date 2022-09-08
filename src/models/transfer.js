module.exports = (sequalize, Sequalize) => {
  const Transfer = sequalize.define(
    'Transfer',
    {
      date: {
        type: Sequalize.DATE,
        allowNull: false
      },
      amount: {
        type: Sequalize.INTEGER,
        allowNull: false
      },
      senderAccount: {
        type: Sequalize.INTEGER,
        allowNull: false
      },
      receiverAccount: {
        type: Sequalize.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  );
  return Transfer;
};
