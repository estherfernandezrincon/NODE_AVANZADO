"use strict";

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tag: [String],
}, {
    collection: 'anuncios'

});

//creamos un metodo nuevo para pasar los filtros en misAnuncios, aqui no se usa arrowfunctio
anuncioSchema.statics.lista = function (filtros, skip) {
    const query = Anuncio.find(filtros);
    query.skip(skip);
    return query.exec();
}

//creamos el contenido, por eso lleva el parametro contenido. 
const Anuncios = mongoose.model('Anuncios', anuncioSchema);

module.exports = Anuncios;