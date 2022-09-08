module.exports = (sequalize, Sequalize) => {
  const BankAccount = sequalize.define(
    'BankAccount',
    {
      bankName: {
        type: Sequalize.STRING,
        allowNull: false
      },
      accountNumber: {
        type: Sequalize.STRING,
        allowNull: false
      },
      accountType: {
        type: Sequalize.STRING,
        allowNull: false
      },
      founds: {
        type: Sequalize.FLOAT,
        allowNull: false
      }
    },
    { timestamps: false }
  );
  return BankAccount;
};
