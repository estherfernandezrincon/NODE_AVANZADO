"use strict";

const express = require('express');
const { deleteOne } = require('../../models/Anuncios');
const router = express.Router();

const Anuncios = require('../../models/Anuncios');


//devuelve los anuncios
router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncios.find();
        res.json(
            { anuncios: anuncios }
        );

    } catch (err) {
        next(err);
    }
});

// obtener un anuncio
router.get('/:identificador', async (req, res, next) => {
    try {
        //metemos peticiones para filtrar en la busqueda
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const tagsQuery = req.query.tags;
        const skip = parseInt(req.query.skip); //skip lo pasa como string siempre
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;

        const filtros = {} // para que si no hay filtro muestre todos los anuncios

        if (nombre) {
            filtros.nombre = nombre;
        }

        if (precio > 10 || precio < 50) {
            filtros.precio = precio

        } else {
            filtros.precio = anuncios;
        }

        for (i = 0; i < tags.length; i++) {
            const tags = tags[i];
        } if (tagsQuery === tags) {
            filtros.tagsQuery = tags;
        }

        //devuelve anuncio por id
        const id = req.params.identificador;
        const anuncio = await Anuncios.lista(filtros, skip, limit, fields, sort);
        //const anuncio = await Anuncios.find({ nombre: nombre })

        res.json({ anuncios: anuncio });

    } catch (err) {
        next(err);
    }
});


// crear un anuncio

router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;

        const anuncio = new Anuncios(anuncioData);  //le paso al constructor el nuevo anuncio

        const anuncioCreado = await anuncio.save();
        res.status(201).json({ anuncios: anuncioCreado });

    } catch (err) {
        next(err);
    }
});

// eliminar un anuncio

router.delete('/:id', async (req, res, next) => {
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

// actualizar un anuncio

router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const anuncioData = req.body;

        const anuncioActual = await Anuncios.findOneAndUpdate({ _id: _id }, anuncioData, {
            new: true // para que devulva el estado actual del anuncio
        });

        if (!anuncioActual) {
            res.status(404).json({ error: "the following update cannot be processed, because of anuncio not found" });
            return;
        }
        res.json({ anuncios: anuncioActual });

    } catch (err) {
        next(err);

    }
});

module.exports = router;