// Importa o módulo de configuração do banco de dados
var database = require("../database/config");

// Função para buscar as últimas medidas de um usuário específico
function buscarUltimasMedidas(fk_usuario) {
    // Comando SQL para selecionar todas as notas do usuário especificado
    var instrucaoSql = `
    SELECT nota FROM pontuacao WHERE fk_usuario = ${fk_usuario}
    `;

    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);   
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucaoSql);
}

// Função para obter a maior e a menor nota de um usuário específico
function maximoMinimo(fk_usuario) {
    // Comando SQL para selecionar a maior e a menor nota do usuário especificado
    var instrucaoSql = `
    SELECT max(nota) as MaiorNota, min(nota) as MenorNota FROM pontuacao WHERE fk_usuario = ${fk_usuario}
    `;

    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucaoSql);
}

// Função para obter o total de pontuações por mês para um usuário específico
function ultimoMes(fk_usuario) {
    var instrucaoSql = `
   SELECT MONTH(data_hora) AS mes,
       COUNT(idPontuacao) AS total
   FROM pontuacao
   WHERE fk_usuario = ${fk_usuario}
   GROUP BY MONTH(data_hora);
    `;
    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucaoSql);
}

/*
GROUP BY MONTH(data_hora):

Agrupa os registros pelo mês extraído da coluna data_hora. Cada grupo representará todas as pontuações feitas em um determinado mês.
*/

// Função para calcular a porcentagem de acertos mais recentes de um usuário específico
function ultimaPont(fk_usuario) {
    var instrucaoSql = `
   SELECT ROUND(AVG((nota / 10) * 100)) AS PorcentagemAcertos
FROM usuario
JOIN pontuacao ON fk_usuario = idUsuario
WHERE fk_usuario = ${fk_usuario};

    `;
    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucaoSql);
}

// Função para obter a data da última rodada de pontuação de um usuário específico
function ultimaRodada(fk_usuario) {
    var instrucaoSql = `
    SELECT data_hora, DATE_FORMAT(data_hora, '%d/%m/%y') AS ultima_rodada 
    FROM pontuacao 
    WHERE fk_usuario = ${fk_usuario} 
    ORDER BY data_hora DESC
    LIMIT 1;
    `;
    // Log para indicar que a consulta está sendo executada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Executa o comando SQL e retorna o resultado
    return database.executar(instrucaoSql);
}

// Exporta as funções para que possam ser utilizadas em outros módulos
module.exports = {
    buscarUltimasMedidas,
    maximoMinimo,
    ultimoMes,
    ultimaPont,
    ultimaRodada,
}
