const {dbConfig} = require("../config/config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    //dialectOptions: dbConfig.dialectOptions,
    operatorsAliases: dbConfig.operatorsAliases,
    //ssl: dbConfig.ssl,
    pool: dbConfig.pool
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.category = require("../models/category.js")(sequelize,Sequelize);

module.exports = db;