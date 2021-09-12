"use strict";

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
}, {
    collection: 'anuncios'

});

//creamos un metodo nuevo para pasar los filtros en misAnuncios, aqui no se usa arrow function
anuncioSchema.statics.lista = function (filtros, skip, limit, fields, sort) {
    const query = Anuncios.find(filtros);
    query.skip(skip);
    query.limit(limit);
    query.fields(fields);
    query.sort(sort);
    return query.exec();
}

//creamos el contenido
const Anuncios = mongoose.model('Anuncios', anuncioSchema);

module.exports = Anuncios;