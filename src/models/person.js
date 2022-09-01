module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define('Person', {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Person;
};
