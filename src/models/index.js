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
db.person = require("../models/person.js")(sequelize,Sequelize);
db.movement = require("../models/movement.js")(sequelize,Sequelize);
db.bankAccount = require("../models/bankAccount.js")(sequelize,Sequelize);
db.transfer = require("../models/transfer.js")(sequelize,Sequelize);
db.badge = require("../models/badge.js")(sequelize,Sequelize);
db.convertion = require("../models/convertion.js")(sequelize,Sequelize);

// RELATION CATEGORY-MOVEMENT 1-1
db.category.hasOne(db.movement);
db.movement.belongsTo(db.category);

// RELATION PERSON-MOVEMENT 1-N
db.person.hasMany(db.movement);
db.movement.belongsTo(db.person);

// RELATION BANKACCOUNT-MOVEMENT 1-N
db.bankAccount.hasMany(db.movement);
db.movement.belongsTo(db.bankAccount);

// RELATION PERSON-BANKACCOUNT 1-N
db.person.hasMany(db.bankAccount);
db.bankAccount.belongsTo(db.person);

// RELATION PERSON-TRANSFER 1-N
db.person.hasMany(db.transfer);
db.transfer.belongsTo(db.person);

// RELATION BADGE BANKACCOUNT 1-N
db.badge.hasMany(db.bankAccount);
db.bankAccount. belongsTo(db.badge);

// RELATION BADGE TRANSFER 1-N
db.badge.hasMany(db.transfer);
db.transfer. belongsTo(db.badge);

// RELATION BADGE MOVEMENT 1-N
db.badge.hasMany(db.movement);
db.movement. belongsTo(db.badge);

module.exports = db;