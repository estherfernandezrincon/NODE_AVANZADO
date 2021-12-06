const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  if (!req.session.userLogado) {
    res.redirect("/login");
    return;
  }
  res.render("privado");

  res.locals.privado = res.__("ya puedes subir tu anuncio");
});

module.exports = router;
