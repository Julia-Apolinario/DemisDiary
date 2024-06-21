var database = require("../database/config");


function listar() {
  var instrucaoSql = `SELECT * FROM album`;

  return database.executar(instrucaoSql);
}


function buscarAlbum() {
    
  var instrucaoSql = `
  SELECT COUNT(u.idusuario) AS NumeroUsuarios
  FROM album p
  LEFT JOIN usuario u ON p.idalbum = u.fk_album
  GROUP BY p.idalbum, p.nome;
  `
  console.log("Executando album")
  return database.executar(instrucaoSql);
}


function ranking() {
    
  var instrucaoSql = `
  SELECT 
    a.nome,
    COUNT(u.idUsuario) AS NumeroUsuarios
FROM 
    album a
LEFT JOIN 
    usuario u ON a.idAlbum = u.fk_album
GROUP BY 
    a.idAlbum, a.nome
ORDER BY 
    NumeroUsuarios DESC;
  `
  console.log("Executando ranking")
  return database.executar(instrucaoSql);
}


module.exports = {listar,buscarAlbum,ranking};
