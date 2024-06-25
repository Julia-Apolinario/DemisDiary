
var pontuacaoModel = require("../models/pontuacaoModel");
function cadastrarNota(req, res) {
    var pontos = req.body.NotaServer;
    var idUsuario = req.body.UsuarioServer;
    

    if (pontos == undefined) {
        res.status(400).send("Sua nota está undefined!");
    }else if(idUsuario == undefined){
        res.status(400).send("Usuario está undefined!");
    } else{ 
    pontuacaoModel.cadastrarNota(idUsuario, pontos).then(function(resposta){
        res.status(200).send("Nota registrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
}

  module.exports = {
    cadastrarNota
}