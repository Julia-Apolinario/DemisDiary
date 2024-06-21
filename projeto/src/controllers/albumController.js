var albumModel = require("../models/albumModel");

function listar(req, res) {
  albumModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarAlbum(req, res) {

  albumModel.buscarAlbum()
      .then(result => res.status(200).json(result))
      .catch(erro => {
          console.error('Erro', erro.sqlMessage)
          res.status(500).json(erro.sqlMessage)
      })
}

function ranking(req, res) {

  albumModel.ranking()
      .then(result => res.status(200).json(result))
      .catch(erro => {
          console.error('Erro', erro.sqlMessage)
          res.status(500).json(erro.sqlMessage)
      })
}

module.exports = {
  listar,
  buscarAlbum,
  ranking
};
