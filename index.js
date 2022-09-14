const express = require('express');
const { serverConfig } = require('./src/config/config.js');
const cors = require('cors')

const app = express();

const invalidRoute = require('./src/routes/404');
const categoryRoutes = require('./src/routes/category');
const badgeRoutes = require('./src/routes/badge');
const movementRoutes = require('./src/routes/movement');
const bankAccountRoutes = require('./src/routes/bankAccount');
const transferRoutes = require('./src/routes/transfer');
const personRoutes = require('./src/routes/person');

//cors policy
app.use(cors({origin: true}));

//Recibir en formato json
app.use(express.json());

//DB
const db = require('./src/models');
db.sequelize.sync();

//Root Handler
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Budget Management API.' });
});

//Routes
app.use(personRoutes);
app.use(categoryRoutes);
app.use(badgeRoutes);
app.use(movementRoutes);
app.use(bankAccountRoutes);
app.use(transferRoutes);

//Handler: 404
app.use(invalidRoute);


app.listen(serverConfig.port, () => {
  console.log('Server is running.');
});
