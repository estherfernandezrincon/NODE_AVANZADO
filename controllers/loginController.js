"use strict";

class LoginController {
  index(req, res, next) {
    res.render("login");
  }

  post(req, res, next) {
    console.log(req.body);
  }
}

module.exports = LoginController;
