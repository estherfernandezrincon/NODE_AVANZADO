"use strict";

const { Requester } = require("cote");

const requester = new Requester({ name: "nueva imagen" });

class ImageController {
  //GET api/image
  index(req, res, next) {
    const grande = req.file;

    requester.send(
      {
        type: "nueva imagen",
        grande,
      },
      (result) => {
        res.json({ result });
      }
    );
  }
}

module.exports = ImageController;
