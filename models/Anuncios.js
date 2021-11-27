"use strict";

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema(
  {
    nombre: { type: String, index: true },
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
  },
  {
    collection: "anuncios",
  }
);

anuncioSchema.statics.lista = function (filtros, skip, limit, select, sort) {
  const query = Anuncios.find(filtros);
  query.skip(skip);
  query.limit(limit);
  query.select(select);
  query.sort(sort);
  return query.exec();
};

//creamos el contenido
const Anuncios = mongoose.model("Anuncios", anuncioSchema);

module.exports = Anuncios;
