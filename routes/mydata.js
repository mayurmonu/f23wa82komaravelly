var express = require('Mayur Komaravelly');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mayur Komaravelly' });
});

module.exports = router;
