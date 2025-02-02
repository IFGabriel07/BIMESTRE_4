const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Profissao = sequelize.define('Profissao', {
  cod: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Profissao;