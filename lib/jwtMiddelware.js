"use strict";

const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  //recoge jwt de la cabecera

  const jwtToken = req.get("Auth") || req.query.token || req.body.token;

  //comprobar que hay token
  if (!jwtToken) {
    const err = new Error("no hay token");
    err.status = 401;
    next(err);
    return;
  }

  //comrpobar si hay token que es valido
  jwt.verify(jwtToken, process.env.SECRET_JWT, (err, payload) => {
    if (err) {
      err.status = 401;
      next(err);
      return;
    }

    //capturamos el id de usuario
    req.apiAuthUserId = payload._id;

    //si todo va bien, continuamos
    next();
  });
};
