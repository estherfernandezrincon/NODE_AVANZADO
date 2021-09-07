var express = require('express');
var router = express.Router();
const anuncios = require('../add');

router.get('/', (req, res, next) => {
    res.json(
        anuncios
    );
});





module.exports = router;