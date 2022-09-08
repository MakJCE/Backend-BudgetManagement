module.exports = (sequalize, Sequalize) => {
  const Category = sequalize.define(
    'Category',
    {
      name: {
        type: Sequalize.STRING,
        allowNull: false
      },
      description: {
        type: Sequalize.STRING,
        allowNull: true
      }
    },
    { timestamps: false }
  );
  return Category;
};