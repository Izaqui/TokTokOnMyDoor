const express = require('express');

const UserController = require('./User/Services/UserController');
const User = require('./User/Services/User');

const connectionUserDB = require('./User/DataBaseUser/database');
const connectionUserTemp = require('./Temporary/temp');

const routes = express.Router();

//Rotas UserController
routes.get('/usuario', UserController.index);
routes.post('/usuario', UserController.create);
routes.delete('usuario/:email', UserController.delete);

//Rotas User
routes.get('/usuario',User.index);
routes.post('/usuario',User.create);

module.exports = routes;