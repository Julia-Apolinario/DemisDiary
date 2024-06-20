var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/cadastrarNota", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    pontuacaoController.cadastrarNota(req, res);
});

router.get("/listarPontuacao", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    pontuacaoController.listarPontuacao(req, res);
});


module.exports = router;