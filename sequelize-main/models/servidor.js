
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Servidor = sequelize.define('Servidor', {
  cpf: {
    type: DataTypes.STRING(14),
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Horario_Disponivel_entrada: {
    type: DataTypes.STRING(50),
  },
  Horario_Disponivel_saida: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING(100),
  },
  senha: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING(1000),
  },
  valor: {
    type: DataTypes.DOUBLE,
  },
  avaliacao: {
    type: DataTypes.STRING(3),
  },
  icone: {
    type: DataTypes.STRING(1000),
  },
  numero: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
});

module.exports = Servidor;
