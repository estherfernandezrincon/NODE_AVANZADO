"use strict";

const { Requester } = require("cote");

const requester = new Requester({ name: "publisher" });

const grande = req.file.filename;
requester.send(
  {
    type: "nueva imagen",
    grande,
    //grande: `./public/images/${foto}`,
  },
  (resultado) => {
    console.log("ya tengo el resultado", resultado);
  }
);
