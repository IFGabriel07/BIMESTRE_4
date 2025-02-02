
const sequelize = require('./db');
const cliente = require('./models/cliente');
const Servidor = require('./models/servidor');
//const Profissao = require('./ServiçosEG/profissao');
//const Pagamentos = require('./ServiçosEG/pagamentos');
//const FormasPagamento = require('../ServiçosEG/formasPagamento');//
//const ClienteServidor = require('./ServiçosEG/clienteServidor');//
//const ServidorFormasPagamento = require('../ServiçosEG/servidorFormasPagamento');//
//const ServidorProfissao = require('../ServiçosEG/servidorProfissao');//

const setupRelationships = require('./models/relationships');

(async () => {
  try {
    // Configurar relacionamentos
    setupRelationships();

    // Sincronizar o banco de dados
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado.');

    // Criar um usuário
    const Cliente = await Cliente.create({ nomeDoCliente: 'José cicero dos Santos', email: 'ciço34@gmail.com' });


 // / Criar um usuário
    const cliente = await cliente.create({

      id: 'USR001',
      nome: 'John Doe',
      email: 'john@example.com',
      senha: 'senha123',
      cpf:"710.121.122-09",
      endereço: "alagoas",
     });


    // Criar um servidor 
    const Servidor = await Servidor.create({NomedoServido: 'Elijamerson dos Santos', email: "eli@gmail.com"});


    console.log('Usuário e perfil criados:', usuario.toJSON(), profile.toJSON());

   

    const post2 = await Post.create({
      title: 'Dicas de programação',
      content: 'Aqui estão algumas dicas úteis para programadores.',
      usuarioId: usuario.id,
    })  ;

    console.log('Posts criados:', post1.toJSON(), post2.toJSON());

    // Criar tags
    const tag1 = await Tag.create({ name: 'Tecnologia' });
    const tag2 = await Tag.create({ name: 'Programação' });

    console.log('Tags criadas:', tag1.toJSON(), tag2.toJSON());

    // Associar tags aos posts com atributos extras
    await post1.addTag(tag1, { through: { relevance: 5 } });
    await post1.addTag(tag2, { through: { relevance: 3 } });
    await post2.addTag(tag2, { through: { relevance: 4 } });

    console.log('Tags associadas aos posts.');

    // Consultar posts com tags
    const posts = await Post.findAll({
      include: {
        model: Tag,
        through: { attributes: ['assignedAt', 'relevance'] },
      },
    });

    console.log('Posts com tags:', JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();

