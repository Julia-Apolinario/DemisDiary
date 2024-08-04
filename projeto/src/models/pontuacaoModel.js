// Importa o módulo de configuração do banco de dados
var database = require("../database/config");

// Função para cadastrar uma nota para um usuário específico
function cadastrarNota(idUsuario, pontos) {
    // Comando SQL para inserir uma nova pontuação na tabela 'pontuacao'
    // Utiliza o id do usuário e a nota fornecida
    var instrucao = `
        INSERT INTO pontuacao (fk_usuario, nota) VALUES (${idUsuario}, '${pontos}');
    `;
    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucao);
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucao);
}

// Exporta a função para que possa ser utilizada em outros módulos
module.exports = {
    cadastrarNota
};


