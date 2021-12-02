const express = require("express");
const { __ } = require("i18n");
const router = express.Router();
const anuncio = require("../add.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: __("Bienvenido a NodePOP"),
    header: __("Quieres comprar o vender"),
    contenido: __("CONTENIDO"),
    anuncios: anuncio.anuncios,
  });
});

module.exports = router;
