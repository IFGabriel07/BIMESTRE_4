const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const pagamentos = sequelize.define('pagamentos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  data_pagamento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cliente_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
  servidor_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
  metodo_pagamento: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = pagamentos;
