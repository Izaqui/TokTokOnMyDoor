const express = require('express');

const UserController = require('./User/Services/UserController');
const User = require('./User/Services/User');

const connectionUserDB = require('./User/DataBaseUser/database');

const carrinho = require('./Temporary/carrinho');

const localiza = require('./Localization/localizationService');

const routes = express.Router();

//Rotas UserController
routes.get('/usuario', UserController.index);
routes.post('/usuario', UserController.create);
routes.delete('usuario/:email', UserController.delete);

//Rotas User
routes.get('/usuario',User.index);
routes.post('/usuario',User.create);

//Rotas Carrinho
routes.get('/usuario', carrinho.index);
routes.post('/usuario', carrinho.create);

//Rotas Localização produto
routes.get('/usuario', localiza.index);
routes.post('/usuario', localiza.create);

module.exports = routes;