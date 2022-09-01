const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
  port: process.env.SERVER_PORT
};
const dbConfig = {
  HOST: process.env.DB_HOST,
  PORT: process.env.PORT,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PSSWD,
  DB: process.env.DB_NAME,
  dialect: 'postgres',
  operatorsAliases: 0,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 10,
    min: 10,
    acquire: 30000,
    idle: 60000
  }
};

const authConfig = {
  key: process.env.AUTH_KEY,
}

module.exports = { serverConfig, dbConfig, authConfig };
