"use strict";

const { Usuario } = require("../models");
const jwt = require("jsonwebtoken");

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

  logout(req, res, next) {
    req.session.regenerate((error) => {
      if (error) {
        next(error);
        return;
      }
      res.redirect("/");
    });
  }

  async postJWT(req, res, next) {
    try {
      const { email, password } = req.body;

      const myUser = await Usuario.findOne({ email }); //lo busca en la BBDD
      console.log(myUser);

      if (!myUser || !(await myUser.comparePassword(password))) {
        res.json({ error: "Credenciales Incorrectas" });
        return;
      }

      //si usuario existe y la contraseña es correcta
      //creamos jwt con id de usuario

      jwt.sign(
        { _id: myUser._id },

        process.env.SECRET_JWT,
        { expiresIn: "8d" },
        (err, jwtToken) => {
          if (err) {
            next(err);

            return;
          }

          //si todo va bien devolver el token
          res.json({ token: jwtToken });
          return;
        }
      );
    } catch (err) {
      next();
    }
  }
}

module.exports = LoginController;
