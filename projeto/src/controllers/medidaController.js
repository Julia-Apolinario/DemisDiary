var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var {fk_usuario} = req.params

    medidaModel.buscarUltimasMedidas(fk_usuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function maximoMinimo(req, res) {

   // var fk_usuario = req.params.idUsuario;
   var {fk_usuario} = req.params
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.maximoMinimo(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas (max,min).", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function medianota(req,res){
    var {fk_usuario} = req.params

    medidaModel.medianota(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medias.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimaPont(req,res){
    var {fk_usuario} = req.params

    medidaModel.ultimaPont(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ultima Pontuação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimaRodada (req,res){
    var {fk_usuario} = req.params

    medidaModel.ultimaRodada(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ultima data.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
    buscarUltimasMedidas,
    maximoMinimo,
    medianota,
    ultimaPont,
    ultimaRodada,

}