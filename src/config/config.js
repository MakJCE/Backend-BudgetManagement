const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
    port: process.env.SERVER_PORT
}

module.exports = {serverConfig};