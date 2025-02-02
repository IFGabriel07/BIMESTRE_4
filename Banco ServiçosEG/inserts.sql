

insert into cliente(cpf,email,senha,nome,endereco,numero) 
values
("612.212.121-12","eligordo@gmail.com","gordo3221","Gordinho da Silva Pinto","Alagoas, Flexeiras ","82 99232-5342"), 
("602.455.773-92","jose@gmail.com","joselito123","jose da Silva","Alagos, Maceió","82 99135-8342"),
("382.555.773-82","teo@gmail.com","teozinho123","teo dos santos","Alagos, Maceió","82 99232-5352"),
("122.975.123-82","ljsm@gmail.com","jhonson132","LIndonjhonson da Silva Machado","Alagos, Maceió","82 99876-5122"),
("192.761.093-70","Narc12@gmail.com","ciso8132","Adonai Roberto de Oliveira Narciso","Alagoas, Maceió","82 99890-1542"),
("134.921.012-50","dhs.lima@gmail.com","DHL@gmail.com","David lourenço","Alagoas Flexeiras,","82 92376-3422"),
("809.231.023-06","ciço34@gmail.com","ciço9032","José cicero dos Santos","Alagoas, Flexeiras","82 91276-0987");




insert into servidor(cpf,email,senha,nome,Horario_Disponivel_entrada,Horario_Disponivel_saida,endereco,valor, numero) 
values
("313.114.316-90", "David@gmail.com","david1989","David Henrique de Souza Lima","6:00","19:00","Alagoas, Maceió", 200.00,"82 99533-4575"),
("333.224.367-70", "eli@gmail.com","elimesmo666","Elijamerson Lurenço dos Santos","7:00","18:00", "Alagoas, Maceió,", 150.00,"82 99533-2581"),
("353.114.877-21","sandro@gmail.com","sandinho157","Sandro Vagner de Oliveira ","6:00","16:00", "Alagoas, Maceió", 100.00,"82 99533-9513"),
("309.198.752-01","Giva12@gmail.com","pikachu622","Givanildo Lourenço de farias","12:00","19:00", "Alagoas, Maceió", 220.00,"82 99533-3572"),
("312.876.122-05","mg12@gmail.com","Moura412","Miguel Andrade Moura","9:00", "17:00","Alagoas, Maceió,", 165.50,"82 99533-7524"),
("312.574.666-02","iranmatador@gmail.com","Matacassaco123","Iran Santana Batista Filho","13:00", "18:00","Alagoas, Maceió", 160.00,"82 99533-5534"),
("762.274.626-20","Teteuzinho712@gmail.com","caspa431","Matheus dos Santos Luna","11:00", "16:00","Alagoas, Maceió", 169.00,"82 92923-5490");

insert into profissao(nome,cod) values
("informática", 1),
("professor", 2), 
("mecânico", 3),
("Encanador", 4), 
("Eletricista", 5),
("Babá", 6);

insert into formasPagamento(nome,cod) values
("pix", 1),
("dinheiro", 2),
("cartão", 3);

INSERT INTO pagamentos (cliente_cpf,  servidor_cpf, valor, data_pagamento, descricao)
VALUES 
("192.761.093-70",  "313.114.316-90", 150.00, '2024-11-21 10:00:00','Pagamento por um serviço de informática'),
("122.975.123-82", "333.224.367-70",200.00, '2024-10-02 17:30:00','Pagamento por um serviço de prefessor' );


insert into clienteServidor(fk_cliente_cpf, fk_servidor_cpf) values 
("192.761.093-70","313.114.316-90"),
("122.975.123-82", "333.224.367-70");



insert into servidorFormasPagamento(fk_formasPagamento_cod, fk_servidor_cpf) values
(1, "313.114.316-90"),
(2, "333.224.367-70");
                      
                      
                                                                         

insert into servidorProfissao(fk_profissao_cod, fk_servidor_cpf) values
(1, "313.114.316-90"),
(2, "333.224.367-70"),
(3, "353.114.877-21"),
(4, "309.198.752-01"),
(5, "312.876.122-05"),
(6, "312.574.666-02"),
(1,"762.274.626-20");
                      
	
