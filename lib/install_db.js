"use strict";

const mongoose = require("mongoose");
const db = mongoose.connection;
const allData = require('./models/Anuncios');
const data = require('./add');

//ELIMINAMOS DATOS
const cleanTable = async () => {
    try {
        await allData.drop()
        console.log('table already cleaned up');

    } catch (e) {
        console.log(e)
    }
}


//insertamos datos
const newData = async () => {
    try {
        await data.insert()
        console.log('successfully')
    } catch (e) {
        console.log(e)
    }
}

//conectar con la base de datos