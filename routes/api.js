const express = require('express');
const router = express.Router();

const Anuncios = require('../models/Anuncios');

router.get('/', async (req, res, next) => {
    const anuncios = await Anuncios.find();
    res.json(
        anuncios
    );
});





module.exports = router;