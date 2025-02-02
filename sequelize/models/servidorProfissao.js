const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ServidorProfissao = sequelize.define('ServidorProfissao', {
  fk_servidor_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    references: {
      model: 'Servidor', 
      key: 'cpf',
    },
  },
  fk_profissao_cod: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'Profissao', 
      key: 'cod',
    },
  },
});

module.exports = ServidorProfissao;
