const express = require("express");
const { __ } = require("i18n");
const router = express.Router();
const anuncio = require("../add.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  // const anuncios = [
  //   { nombre: "botas", precio: 80, venta: true, foto: "bota.png", tags: ["lifestyle", "work"] },
  //   { nombre: "sillas", precio: 20, venta: true, foto: "silla.png", tags: ["work", "lifestyle"] },
  //   { nombre: "mesa", precio: 50, venta: true, foto: "mesa.png", tags: ["work", "lifestyle"] }
  // ]
  console.log(anuncio);

  res.render("index", {
    title: __("Bienvenido a NodePOP"),
    anuncios: anuncio.anuncios,
  });
});

module.exports = router;
