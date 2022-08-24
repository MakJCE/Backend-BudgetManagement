const express = require('express');
const { serverConfig } = require('./src/config/config.js');

const app = express();

const invalidRoute = require('./src/routes/404');
const categoryRoutes = require('./src/routes/category');

//Recibir en formato json
app.use(express.json());

//Routes
app.use(categoryRoutes)

//Handler: 404
app.use(invalidRoute)

app.get('/', (req, res) => {
  res.json({ message: 'Welcome.' });
});

app.listen(serverConfig.port, () => {
  console.log('Server is running.');
});
