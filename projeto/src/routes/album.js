var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listar", function (req, res) {
  albumController.listar(req, res);
});

router.get("/buscarAlbum", function (req, res) {
  albumController.buscarAlbum(req, res);
});

router.get("/ranking", function (req, res) {
  albumController.ranking(req, res);
});


module.exports = router;