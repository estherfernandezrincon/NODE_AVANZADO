"use strict";

const DBconnection = require('./lib/connectMongoose');

const allData = require('./models/Anuncios');
const data = require('./add');

main().catch(err => console.log('hay un err', err));

async function main() {
    await initAnuncios();
    DBconnection.close();
}

async function initAnuncios() {
    const cleanTable = await allData.deleteMany();
    console.log(`Elimininados correctamente ${cleanTable.cleanTableCount} anuncios`);

    const newAgentes = await allData.insertMany(data.misAnuncios);
    console.log(`Creados correctamente ${newAgentes.length} anuncios`);
}


