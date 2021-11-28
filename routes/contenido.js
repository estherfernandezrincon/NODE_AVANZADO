const express = require("express");
const router = express.Router();
const { __ } = require("i18n");
const anuncio = require("../add.json");

router.get("/", function (req, res, next) {
  res.render("contenido", {
    title: __("Bienvenido a NodePOP"),
    header: __("Quieres comprar o vender"),
    anuncios: anuncio.anuncios,
  });
});

module.exports = router;
