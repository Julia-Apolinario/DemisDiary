var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fk_usuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/maximoMinimo/:fk_usuario", function (req, res) {
    medidaController.maximoMinimo(req, res);
})

router.get("/medianota/:fk_usuario", function (req, res) {
    medidaController.medianota(req, res);
})

router.get("/ultimaPont/:fk_usuario", function (req, res) {
    medidaController.ultimaPont(req, res);
})

router.get("/ultimaRodada/:fk_usuario", function (req, res) {
    medidaController.ultimaRodada(req, res);
})





module.exports = router;