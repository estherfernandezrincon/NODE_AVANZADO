const express = require("express");
const router = express.Router();
const anuncio = require("../add.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: res.__("Bienvenido a NodePOP"),
    header: res.__("Quieres comprar o vender"),
    contenido: res.__("CONTENIDO"),
    anuncios: anuncio.anuncios,
  });
});

module.exports = router;
