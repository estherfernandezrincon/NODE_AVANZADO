"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usuarioSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

usuarioSchema.statics.hashPassword = function (passwordVisible) {
  return bcrypt.hash(passwordVisible, 5);
};

usuarioSchema.methods.comparePassword = function (passwordVisible) {
  return bcrypt.compare(passwordVisible, this.password);
};

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
