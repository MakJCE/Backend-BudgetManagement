const express = require('express');
const { serverConfig } = require('./src/config/config.js');
const guard = require('./src/guard/guard');

const app = express();

const invalidRoute = require('./src/routes/404');
const categoryRoutes = require('./src/routes/category');

//Recibir en formato json
app.use(express.json());

//DB
const db = require("./src/models");
db.sequelize.sync();

//Auth
app.use(guard);

//Routes
app.use(categoryRoutes)

//Handler: 404
app.use(invalidRoute)

//Root Handler
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Budget Management API.' });
});

app.listen(serverConfig.port, () => {
  console.log('Server is running.');
});
