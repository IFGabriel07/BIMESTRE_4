const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const cliente = sequelize.define('Cliente', {
  cpf: {
    type: DataTypes.STRING(14),
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
});

module.exports = cliente;