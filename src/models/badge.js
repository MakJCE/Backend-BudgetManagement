module.exports = (sequelize, Sequalize) => {
    const Badge = sequelize.define(
      'Badge',
      {
        name: {
          type: Sequalize.STRING,
          allowNull: false
        },
        symbol: {
          type: Sequalize.STRING,
          allowNull: false
        },
      },
      { timestamps: false }
    );
    return Badge;
  };