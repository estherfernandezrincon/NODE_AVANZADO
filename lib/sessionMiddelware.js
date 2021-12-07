"use strict";

module.exports = (req, res, next) => {
  if (!req.session.userLogado) {
    res.redirect("/login");
    return;
  }

  next();
};
