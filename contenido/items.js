"use strict";

var mongoose = require("mongoose");

var contenidoSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tag: [String]

});

//creamos el contenido, por eso lleva el parametro contenido. 
mongoose.model('Contenido', contenidoSchema);


















