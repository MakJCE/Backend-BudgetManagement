module.exports = (sequelize, Sequalize) => {
  const Movement = sequelize.define(
    'Movement',
    {
      date: {
        type: Sequalize.DATE,
        allowNull: false
      },
      type: {
        type: Sequalize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequalize.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  );
  return Movement;
};
