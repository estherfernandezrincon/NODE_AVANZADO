var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json(
        [
            { id: 1, botas: "80€" },
            { id: 2, silla: "20€" },
            { id: 3, mesa: "50€" }
        ]
    );
});

module.exports = router;
