const cliente = require('./cliente');
const Servidor = require('./servidor');
const Profissao = require('./profissao');
const FormasPagamento = require('./formasPagamento');
const Pagamento = require('./pagamentos');
const ClienteServidor = require ('./clienteServidor');
const ServidorFormasPagamento = require('./servidorFormasPagamento');
const ServidorProfissao = require('./servidorProfissao');

module.exports = () => {

  cliente.belongsToMany(Servidor, { through: ClienteServidor, foreignKey: 'fk_cliente_cpf' });
  Servidor.belongsToMany(cliente, { through: ClienteServidor, foreignKey: 'fk_servidor_cpf' });

  
  Servidor.belongsToMany(Profissao, { through: ServidorProfissao, foreignKey: 'fk_servidor_cpf' });
  Profissao.belongsToMany(Servidor, { through: ServidorProfissao, foreignKey: 'fk_profissao_cod' });

  
  Servidor.belongsToMany(FormasPagamento, { through: ServidorFormasPagamento, foreignKey: 'fk_servidor_cpf' });
  FormasPagamento.belongsToMany(Servidor, { through: ServidorFormasPagamento, foreignKey: 'fk_formasPagamento_cod' });


  cliente.hasMany(Pagamento, { foreignKey: 'cliente_cpf' });
  Pagamento.belongsTo(cliente, { foreignKey: 'cliente_cpf' });


  Servidor.hasMany(Pagamento, { foreignKey: 'servidor_cpf' });
  Pagamento.belongsTo(Servidor, { foreignKey: 'servidor_cpf' });


};