const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const FormasPagamento = sequelize.define('FormasPagamento', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  metodo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = FormasPagamento;
