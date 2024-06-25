var database = require("../database/config")

function cadastrarNota(idUsuario, pontos) {
    var instrucao = `
        INSERT INTO pontuacao (fk_usuario,nota) VALUES (${idUsuario}, '${pontos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
  
module.exports = {
    cadastrarNota
};

