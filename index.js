const express = require('express');
const { serverConfig } = require('./src/config/config.js');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome.' });
});

app.listen(serverConfig.port, () => {
  console.log('Server is running.');
});
