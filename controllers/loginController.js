"use strict";

const { Usuario } = require("../models");

class LoginController {
  index(req, res, next) {
    res.locals.error = "";
    res.render("login");
  }

  async post(req, res, next) {
    try {
      //console.log(req.body);
      const { email, password } = req.body;

      const myUser = await Usuario.findOne({ email }); //lo busca en la BBDD
      console.log(myUser);

      if (!myUser || !(await myUser.comparePassword(password))) {
        res.locals.error = res.__("Credenciales Incorrectas");
        res.render("login");
        return;
      }

      req.session.userLogado = {
        _id: myUser._id,
      };

      res.redirect("/privado");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = LoginController;
