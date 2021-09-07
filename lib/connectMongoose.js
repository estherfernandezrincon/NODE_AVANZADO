"use strict";

const mongoose = require("mongoose");
const db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);

});

db.once('open', function () {
    console.log('conectado correctamente')
});

mongoose.connect('mongodb://localhost/nodePOP')