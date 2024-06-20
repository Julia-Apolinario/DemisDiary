CREATE DATABASE DemisDiary;
USE DemisDiary;



-- Criação da tabela 'album'
CREATE TABLE album (
    idAlbum INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    dtlancamento DATE
);

-- Criação da tabela 'usuario'
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100),
    senha VARCHAR(45),
    fk_album INT,
    FOREIGN KEY (fk_album) REFERENCES album(idAlbum)
);

-- Criação da tabela 'pontuacao'
CREATE TABLE pontuacao (
    idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    nota INT CHECK (nota >= 0 AND nota <= 10),
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

INSERT INTO album (nome, dtlancamento) VALUES 
('Dont Forget', '2008-09-23'),
('Here We Go Again', '2009-07-21'),
('Unbroken', '2011-09-20'),
('Demi', '2013-05-10'),
('Confident', '2015-10-16'),
('Tell Me You Love Me', '2017-09-29'),
('Dancing with the Devil... the Art of Starting Over', '2021-04-02'),
('HOLY FVCK', '2022-08-19'),
('Revamped', '2023-09-15');

SELECT * FROM album;
SELECT * FROM usuario;
SELECT * FROM pontuacao;

