var express = require('express');
var logger = require('morgan');

const { minify } = require("terser");

var router = express.Router();

router.post('/', function(req, res) {

  // opciones para minificar: https://terser.org/docs/api-reference
  var options = {
    compress: {
      dead_code: false,
      drop_debugger: false,
      keep_fnames: true,
      properties: false,
      pure_getters: false,
      reduce_vars: true,
      unused: false
    },
    mangle: {
      keep_classnames: true,
      keep_fnames: true
    },
    output: {
      comments: false,
      max_line_len: 32000,
      quote_style: 3
    },
    sourceMap: false,
    ecma: 5, // specify one of: 5, 2015, 2016, etc.
    keep_classnames: true,
    keep_fnames: true,
    ie8: false,
    module: false,
    nameCache: null,
    toplevel: false
  };
  
  var code = '';

  if (typeof req.body !== 'undefined') {
    code = req.body;
  } else {
    req.chunks.forEach(function(chunk) {
      code += chunk;
    });
  };

  try {
    var uglified = minify(code, options);
    res.send(uglified.code);
  }
  catch (e) {
    res.writeHead(500);
    res.end();
    logger(e.message);
  };

});


router.get('/', function(req, res) {
  res.render('minificar', { title: 'ME - Minificar JS' });
});

module.exports = router;
