"use strict";

require('dotenv').config();

const dbConnection = require('./lib/connectMongoose');

const allData = require('./models/Anuncios.js');
const data = require('./add.json');

main().catch(err => console.log('se ha producido el siguiente error:', err));

async function main() {
    await initAnuncios();
    dbConnection.close();
}

async function initAnuncios() {
    const cleanTable = await allData.deleteMany();
    console.log(`Elimininados correctamente ${cleanTable.deletedCount} anuncios`);


    const newAnuncios = await allData.insertMany(data.anuncios); //pasamos el json con su propiedad
    console.log(`Creados correctamente ${newAnuncios.length} anuncios`);

}


