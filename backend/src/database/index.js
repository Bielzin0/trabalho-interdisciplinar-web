const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Clientes = require ('../models/Clientes');

const connection = new Sequelize(dbConfig);

Clientes.init(connection);
Usuario.init(connection);

module.exports = connection;


