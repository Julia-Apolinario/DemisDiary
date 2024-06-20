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


function medianota(fk_usuario){
    var instrucaoSql = `
    SELECT ROUND(AVG(nota), 2) AS mediaPontuacao
FROM pontuacao WHERE fk_usuario = ${fk_usuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function ultimaPont(fk_usuario){
   
    var instrucaoSql = `
    SELECT nota AS UltimaPontuacao 
    FROM pontuacao 
    WHERE data_hora <= CURRENT_TIMESTAMP 
    AND fk_usuario = ${fk_usuario}
    ORDER BY data_hora DESC 
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function ultimaRodada(fk_usuario){
   
    var instrucaoSql = `
    SELECT data_hora,DATE_FORMAT(data_hora, '%d/%m/%y') AS ultima_rodada FROM pontuacao WHERE fk_usuario = ${fk_usuario} ORDER BY data_hora DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
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


module.exports = {
    buscarUltimasMedidas,
    maximoMinimo,
    medianota,
    ultimaPont,
    ultimaRodada,
    buscarAlbum
}
