"use strict";

const express = require('express');
const router = express.Router();

const Anuncios = require('../../models/Anuncios');


//devuelve los anuncios
router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncios.find();
        res.json(
            anuncios
        );

    } catch (err) {
        next(err);
    }
});

// obtener un anuncio
router.get('/:identificador', async (req, res, next) => {
    try {
        const id = req.params.identificador;
        const anuncio = await Anuncios.find({ _id: id });

        res.json({ result: anuncio });

    } catch (err) {
        next(err);
    }
});


// crear un anuncio

router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;

        const anuncio = new Anuncios(anuncioData);  //le paso al constructor el nuevo anuncio

        await anuncio.save();
        res.json({});

    } catch (err) {
        next(err);
    }
});



module.exports = router;