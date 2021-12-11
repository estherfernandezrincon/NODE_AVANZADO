"use strict";

const cote = require("cote");
const Jimp = require("jimp");

const { Responder } = require("cote");

//declarar microservicio

const responder = new Responder({ name: "cambio de imagen" });
//console.log(responder);

responder.on("nueva imagen", (req, done) => {
  const { grande } = req;
  console.log(grande);
  const filePath = __dirname
    .split("\\")
    .filter((dir) => dir !== "microservice")
    .join("\\");

  console.log(__dirname);
  console.log(filePath);

  Jimp.read(`${filePath}\\public\\images\\${grande.filename}`)
    .then((newImg) => {
      newImg.resize(100, 100);
      newImg.write(`${filePath}\\public\\thumbnails\\${grande.filename}`);
    })
    .catch((err) => {
      console.log(err);
    });

  done(grande);
});
