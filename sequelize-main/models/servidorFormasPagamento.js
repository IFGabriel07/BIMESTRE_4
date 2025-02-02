const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ServidorFormasPagamento = sequelize.define('SFP', {
  fk_servidor_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
  fk_formasPagamento_cod: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = ServidorFormasPagamento;
