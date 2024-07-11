var database = require("../database/config");

function buscarUltimasMedidas(fk_usuario) {

    var instrucaoSql = `
    SELECT nota FROM pontuacao  WHERE fk_usuario = ${fk_usuario}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maximoMinimo(fk_usuario) {

    var instrucaoSql = `
    SELECT max(nota) as MaiorNota,min(nota) as MenorNota FROM pontuacao WHERE fk_usuario = ${fk_usuario}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function ultimoMes(fk_usuario) {
    var instrucaoSql = `
   SELECT MONTH(data_hora) AS mes,
       COUNT(idPontuacao) AS total
FROM pontuacao
WHERE fk_usuario = ${fk_usuario}
GROUP BY MONTH(data_hora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function ultimaPont(fk_usuario) {

    var instrucaoSql = `
    SELECT IFNULL(ROUND(AVG((nota / 10) * 100)), 'ainda não fez') AS PorcentagemAcertos
    FROM usuario
    JOIN pontuacao ON fk_usuario = idUsuario
    WHERE fk_usuario = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function ultimaRodada(fk_usuario) {

    var instrucaoSql = `
    SELECT data_hora,DATE_FORMAT(data_hora, '%d/%m/%y') AS ultima_rodada FROM pontuacao WHERE fk_usuario = ${fk_usuario} ORDER BY data_hora DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
    buscarUltimasMedidas,
    maximoMinimo,
    ultimoMes,
    ultimaPont,
    ultimaRodada,
}
