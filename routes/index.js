var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bienvenido a NodePOP' });

});


router.get('/parametroenruta/:dato', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);
  res.send('las ' + dato + 'ya no están disponibles')
});

module.exports = router;


