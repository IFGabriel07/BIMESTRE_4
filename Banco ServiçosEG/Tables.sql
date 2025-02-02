
create database ServiçoEG;

use ServiçoEG;

create table cliente(
    cpf varchar(14),
    email varchar(50) unique,
    senha varchar(50),
    nome varchar(50),
    endereco varchar(50),
    numero varchar(50) unique,
    primary key(cpf)

);

create table servidor(
    cpf varchar(14) unique,
    nome varchar(50),
    Horario_Disponivel_entrada  varchar(50),
    Horario_Disponivel_saida varchar(50),
    email varchar(50) unique,
    endereco varchar(100),
    senha varchar(50),
    foto varchar(1000),
    icone varchar(1000),
    avaliacao varchar(3),
    valor double,	
    numero varchar(50) unique,
    primary key(cpf)
    
);

create table Profissao(

    nome varchar(50),
    cod int,
    primary key(cod)

);

create table formasPagamento(
    nome varchar(50),
    cod int,
    primary key(cod)

);

CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    cliente_cpf varchar(14) , 
    servidor_cpf varchar(14) ,
    valor double,               
    data_pagamento timestamp,            
    descricao TEXT,                      
    FOREIGN KEY (cliente_cpf) REFERENCES cliente(cpf),
    FOREIGN KEY (servidor_cpf) REFERENCES servidor(cpf) 
);




create table clienteServidor (

    fk_cliente_cpf varchar(14),
    fk_servidor_cpf varchar(14),
    foreign key(fk_cliente_cpf) references cliente(cpf),
    foreign key(fk_servidor_cpf) references servidor(cpf),
    primary key(fk_cliente_cpf, fk_servidor_cpf)
   

);



create table servidorFormasPagamento (

    fk_formasPagamento_cod int,
    fk_servidor_cpf varchar(14),
    foreign key(fk_formasPagamento_cod) references formasPagamento(cod),
    foreign key(fk_servidor_cpf) references servidor(cpf),
    primary key(fk_formasPagamento_cod, fk_servidor_cpf)

);

create table servidorProfissao (

    fk_Profissao_cod int,
    fk_servidor_cpf varchar(14),
    foreign key(fk_servidor_cpf) references servidor(cpf),
    foreign key(fk_Profissao_cod) references Profissao(cod),
    primary key(fk_servidor_cpf, fk_Profissao_cod)

);


