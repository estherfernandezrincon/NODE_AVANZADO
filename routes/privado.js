const express = require("express");
const router = express.Router();

const anuncio = require("../add.json");

router.get("/", function (req, res, next) {
  res.render("privado", {});
});

module.exports = router;
