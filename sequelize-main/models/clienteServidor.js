const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ClienteServidor = sequelize.define('ClienteServidor', {
  fk_cliente_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    references: {
      model: 'cliente', 
      key: 'cpf',
    },
  },


  fk_servidor_cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    references: {
      model: 'servidor', 
      key: 'cpf',
    },
  },
});

module.exports = ClienteServidor;
