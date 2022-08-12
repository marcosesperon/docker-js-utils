var express = require('express');
var logger = require('morgan');

var router = express.Router();

router.post('/', function(req, res) {

  // opciones para ofuscar: https://obfuscator.io/#Options
  var options = {};
  
  var code = '';

  if (typeof req.body !== 'undefined') {
    code = req.body;
  } else {
    req.chunks.forEach(function(chunk) {
      code += chunk;
    });
  };


  try {
    var JavaScriptObfuscator = require("javascript-obfuscator");
    var resultado = JavaScriptObfuscator.obfuscate(code, options);
    res.send(resultado.getObfuscatedCode());
  }
  catch (e) {
    console.log(e);
    res.writeHead(500);
    res.end();
    logger(e.message);
  };

});


router.get('/', function(req, res) {
  res.render('ofuscar', { title: 'ME - Ofuscar JS' });
});

module.exports = router;
