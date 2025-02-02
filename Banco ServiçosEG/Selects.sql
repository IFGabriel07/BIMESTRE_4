# tela de login cliente e servidor 
SELECT senha FROM cliente where email = "jose@gmail.com";
SELECT senha FROM servidor where email = "TONHO@GMAIL.COM";	

#tela de buscar servidor
SELECT 
    s.nome, p.nome, s.foto
FROM
    servidor s
        INNER JOIN
    servidorProfissao sp ON s.cpf = sp.fk_servidor_cpf
        INNER JOIN
    Profissao p ON sp.fk_Profissao_cod = p.cod;

 # tela do perfil de servidor 1

SELECT 
    s.nome, s.endereco, s.Horario_Disponivel_entrada, s.Horario_Disponivel_saida, p.nome
FROM
    servidor s
    inner join
    servidorProfissao sp on s.cpf = fk_servidor_cpf
    inner join
     Profissao p ON sp.fk_Profissao_cod = p.cod where cpf = "313.114.316-90";
     
      # tela do perfil de servidor 2

SELECT 
    s.nome, s.endereco, s.Horario_Disponivel_entrada, s.Horario_Disponivel_saida, p.nome
FROM
    servidor s
    inner join
    servidorProfissao sp on s.cpf = fk_servidor_cpf
    inner join
     Profissao p ON sp.fk_Profissao_cod = p.cod where cpf = "333.224.367-70";


# Tela de buscar o servidor, filtra pelo endereço do servidor mais Próximo ao usuário 

 SELECT  c.endereco AS cliente_endereco,
		s.endereco AS servidor_endereco
FROM cliente c
inner join clienteServidor cs ON c.cpf = cs.fk_cliente_cpf
inner join servidor s ON s.cpf = cs.fk_servidor_cpf
WHERE c.endereco LIKE "%Maceió%";

