"use strict";

const mongoose = require("mongoose");
const db = mongoose.connection;

db.on('error', function (err) {
    console.log('Error de conexion', err);
    process.exit(1);

});

db.once('open', function () {
    console.log('conectado correctamente a MongoDB')
});

mongoose.connect('mongodb://localhost/nodePOP', {});

