module.exports = (sequelize, Sequalize) => {
  const Convertion = sequelize.define(
    'Convertion',
    {
      badgeFrom: {
        type: Sequalize.INTEGER,
        allowNull: false
      },
      badgeTo: {
        type: Sequalize.INTEGER,
        allowNull: false
      },
      percentValue: {
        type: Sequalize.FLOAT,
        allowNull: false
      },
    },
    { timestamps: false }
  );
  return Convertion;
};
