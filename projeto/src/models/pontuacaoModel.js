var database = require("../database/config")

function listarPontuacao() {
    var instrucao = `
    SELECT * FROM pontuacao WHERE fk_usuario = ${idUsuario} ORDER BY data_hora DESC LIMIT 1
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarNota(idUsuario, pontos) {
    var instrucao = `
        INSERT INTO pontuacao (fk_usuario,nota) VALUES (${idUsuario}, '${pontos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
  
module.exports = {
    cadastrarNota,
    listarPontuacao,
};

