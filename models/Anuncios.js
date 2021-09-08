"use strict";

const mongoose = require("mongoose");

const contenidoSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tag: [String],
}, {
    collection: 'anuncios'

});

//creamos el contenido, por eso lleva el parametro contenido. 
mongoose.model('Anuncios', contenidoSchema);

