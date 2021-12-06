"use strict";

require("dotenv").config();

const mongoose = require("mongoose");

//const dbConnection = require("./lib/connectMongoose");

const allData = require("./models/Anuncios.js");
const data = require("./add.json");

//const allUsers = require("./models/Usuario.js");
//const dataUsers = require("./addUsers.json");

require("./lib/connectMongoose");
const { Usuario } = require("./models");

main().catch((err) => console.log("se ha producido el siguiente error:", err));

async function main() {
  await initAnuncios();
  await initUsuario();
  mongoose.connection.close();
}

async function initAnuncios() {
  const cleanTable = await allData.deleteMany();
  console.log(`Elimininados correctamente ${cleanTable.deletedCount} anuncios`);

  const newAnuncios = await allData.insertMany(data.anuncios); //pasamos el json con su propiedad
  console.log(`Creados correctamente ${newAnuncios.length} anuncios`);
}

async function initUsuario() {
  const cleanTableUsers = await Usuario.deleteMany();
  console.log(
    `Elimininados correctamente ${cleanTableUsers.deletedCount} usuarios`
  );

  const NewUser = await Usuario.insertMany([
    {
      email: "node@pop.com",
      password: await Usuario.hashPassword("pop"),
    },
    {
      email: "user@example.com",
      password: await Usuario.hashPassword("1234"),
    },
  ]);

  console.log(`Creados correctamente ${NewUser.length} usuarios`);
}
