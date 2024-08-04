// Importa o módulo de configuração do banco de dados
var database = require("../database/config");

// Função para listar todos os álbuns
function listar() {
  // Comando SQL para selecionar todos os registros da tabela 'album'
  var instrucaoSql = `SELECT * FROM album`;

  // Executa o comando SQL e retorna o resultado
  return database.executar(instrucaoSql);
}

// Função para buscar a quantidade de usuários por álbum
function buscarAlbum() {
  // Comando SQL para contar o número de usuários associados a cada álbum
  var instrucaoSql = `
  SELECT COUNT(u.idusuario) AS NumeroUsuarios
  FROM album p
  LEFT JOIN usuario u ON p.idalbum = u.fk_album
  GROUP BY p.idalbum, p.nome;
  `
  console.log("Executando album") // Log para indicar que a consulta está sendo executada
  // Executa o comando SQL e retorna o resultado
  return database.executar(instrucaoSql);
}

// Função para obter o ranking dos álbuns com base no número de usuários
function ranking() {
  // Comando SQL para selecionar o nome do álbum e o número de usuários associados, ordenados de forma decrescente pelo número de usuários
  var instrucaoSql = `
SELECT 
    album.nome,
    (SELECT COUNT(usuario.idUsuario) 
     FROM usuario 
     WHERE usuario.fk_album = album.idAlbum) AS NumeroUsuarios
FROM 
    album
ORDER BY 
    NumeroUsuarios DESC;
  `
  console.log("Executando ranking") // Log para indicar que a consulta está sendo executada
  // Executa o comando SQL e retorna o resultado
  return database.executar(instrucaoSql);
}

// Exporta as funções para que possam ser utilizadas em outros módulos
module.exports = { listar, buscarAlbum, ranking };
