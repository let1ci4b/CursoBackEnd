CREATE DATABASE pizzaria;

CREATE TABLE fornecedores(
	cnpj decimal(14,0) PRIMARY KEY,
	nome varchar NOT NULL,
	email varchar,
	telefone decimal(11,0)
);

CREATE TABLE estoque(
	id_produto serial PRIMARY KEY,
	descricao varchar NOT NULL,
	marca varchar NOT NULL,
	quantidade int NOT NULL,
	data_fornec date NOT NULL,
	id_fornec decimal(14,0) references fornecedores (cnpj) NOT NULL
);

CREATE TABLE funcionarios(
	cpf decimal(11,0) PRIMARY KEY,
	pis decimal(11,0) NOT NULL,
	nome varchar NOT NULL,
	data_nasc date NOT NULL,
	cargo varchar NOT NULL,
	carga_hora decimal NOT NULL,
	salario decimal(7,2) NOT NULL
);

CREATE TABLE clientes(
	cod_cliente serial PRIMARY KEY,
	nome varchar NOT NULL,
	contato varchar,
	endereco varchar
);

CREATE TABLE vendas(
	cod_venda serial PRIMARY KEY,
	data_hora timestamp NOT NULL,
	subtotal decimal NOT NULL,
	desconto decimal(3,2),
	id_funcionario decimal(11,0) references funcionarios (cpf) NOT NULL,
	id_cliente serial references clientes (cod_cliente) NOT NULL
);

CREATE TABLE produtos(
	cod_produto serial PRIMARY KEY,
	nome varchar NOT NULL,
	descricao varchar NOT NULL, 
	preco decimal (5,2) NOT NULL,
	categoria varchar NOT NULL
);

CREATE TABLE pedidos(
	id_venda serial references vendas (cod_venda) NOT NULL,
	id_produto serial references produtos (cod_produto) NOT NULL
);

INSERT INTO fornecedores
(cnpj, nome, email, telefone)
VALUES
(12345698263715, 'açougue rio', 'rio1520@gmail.com', 48997625349),
(92736698263728, 'mercado do vale', 'valemercados@outlook.com.br', 48997625653);

INSERT INTO estoque
(descricao, marca, quantidade, data_fornec, id_fornec)
VALUES
('queijo mussarela', 'vaquinha', 30, '2023-03-25', 92736698263728),
('carne moida (musculo)', 'açougue rio', 15, '2023-02-27', 12345698263715);

INSERT INTO funcionarios
(cpf, pis, nome, data_nasc, cargo, carga_hora, salario)
VALUES
(12517817012, 17639627402, 'Marcio Pires Rocha', '1985-09-12', 'cozinheiro', 45, 2532.25),
(16358296450, 99374465108, 'Joana Rocha', '1972-02-01', 'caixa', 45, 1972.78);

INSERT INTO clientes
(nome, contato, endereco)
VALUES
('Joao Silva', 48988652065, 'Avenida Brasil 87'),
('Paula', NULL, NULL);

INSERT INTO vendas
(data_hora, subtotal, desconto, id_funcionario, id_cliente)
VALUES
('2023-01-23 13:33:56', 125.80, NULL, 16358296450, 2),
('2023-04-02 22:12:05', 80.50, 0.05, 16358296450, 1);

INSERT INTO produtos
(nome, descricao, preco, categoria)
VALUES
('Pizza de camarao - M', 'tomate, camarão, requeijao e mussarela', 70.75, 'pizza'),
('Coca-cola', '2 litros', 10.0, 'bebida'),
('Pizza de calabresa - P', 'calabresa, tomate, requeijao, cebola', 45.05, 'pizza');

INSERT INTO pedidos
(id_venda, id_produto)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(2, 3);

SELECT * FROM pedidos INNER JOIN vendas ON pedidos.id_venda = vendas.cod_venda INNER JOIN produtos ON pedidos.id_produto = produtos.cod_produto;

CREATE TABLE historico_func(
	cpf decimal(11,0) PRIMARY KEY,
	nome varchar,
	cargo varchar
);

CREATE OR REPLACE FUNCTION historico_funcionarios()
RETURNS trigger
AS $$
    begin
        insert into historico_func (cpf, nome, cargo)values(OLD.cpf, OLD.nome, OLD.cargo);
        return OLD;
    end;
$$ LANGUAGE plpgsql;

CREATE TRIGGER exe_historico_funcionarios
AFTER DELETE ON funcionarios
    FOR EACH ROW EXECUTE PROCEDURE historico_funcionarios();


