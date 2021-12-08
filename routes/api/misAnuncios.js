"use strict";

const express = require("express");
const router = express.Router();

const Anuncios = require("../../models/Anuncios");

router.get("/", async (req, res, next) => {
  try {
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const tagsQuery = req.query.tags;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const select = req.query.select;
    const sort = req.query.sort;

    console.log("El usuario tiene el _id:", req.apiAuthUserId);

    const filtros = {};

    if (nombre) {
      filtros.nombre = new RegExp("^" + nombre, "i");
    }

    if (precio) {
      const requestedPrice = precio.split("-");
      if (requestedPrice.length === 1) {
        filtros.precio = precio;
      } else if (requestedPrice.length !== 1) {
        if (requestedPrice[0] === "" && requestedPrice[1] !== "") {
          const precioLower = { $lte: requestedPrice[1] };
          console.log(precioLower);
          filtros.precio = precioLower;
        } else if (requestedPrice[0] !== "" && requestedPrice[1] === "") {
          const precioGreater = { $gte: requestedPrice[0] };
          filtros.precio = precioGreater;
        } else if (requestedPrice[0] !== "" && requestedPrice[1] !== "") {
          const precioBetween = {
            $gte: requestedPrice[0],
            $lte: requestedPrice[1],
          };
          filtros.precio = precioBetween;
        }
      }
    }

    if (tagsQuery) {
      filtros.tags = tagsQuery;
    }

    if (venta) {
      filtros.venta = venta;
    }

    const anuncios = await Anuncios.lista(filtros, skip, limit, select, sort);

    const sinAnuncios = "No hay anuncios con estos parametros";

    if (anuncios.length !== 0) {
      res.json({ anuncios: anuncios });
    } else {
      res.json({ anuncios: sinAnuncios });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const tags = {};
    const soloTags = [];
    const anuncios = await Anuncios.lista(tags);

    for (let i = 0; i < anuncios.length; i++) {
      soloTags.push(anuncios[i]["tags"]);
    }
    res.json({ tags: soloTags });
  } catch (err) {
    next(err);
  }
});

router.get("/:identificador", async (req, res, next) => {
  try {
    const id = req.params.identificador;

    const anuncios = await Anuncios.find({ _id: id });
    res.json({ anuncios: anuncios });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.file);
  try {
    const anuncioData = {
      ...req.body,
      foto: req.file.path,
    };

    const anuncio = new Anuncios(anuncioData);

    const anuncioCreado = await anuncio.save();
    res.status(201).json({ anuncios: anuncioCreado });
    console.log(anuncioCreado);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Anuncios.deleteOne({ _id: _id });

    if (!_id) {
      res.status(404).json({ error: "the following id does not exist" });
      return;
    }
    res.json();
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const anuncioData = req.body;

    const anuncioActual = await Anuncios.findOneAndUpdate(
      { _id: _id },
      anuncioData,
      {
        new: true,
      }
    );

    if (!anuncioActual) {
      res.status(404).json({
        error:
          "the following update cannot be processed, because of anuncio not found",
      });
      return;
    }
    res.json({ anuncios: anuncioActual });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
