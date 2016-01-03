var express = require('express');
var router = express.Router();

// var forbaby = require('../handlers/forbaby');
// var forparent = require('../handlers/forparent');

// // for baby client
// router.post('/hrpersec', forbaby.hrpersec);
// router.post('/audiorec', forbaby.audiorec);
// router.post('/emoticon', forbaby.emoticon);

// // for parent client
// router.get('/hrperqtr', forparent.hrperqtr);
// router.get('/dangerhr', forparent.dangerhr);
// router.get('/audiorec', forparent.audiorec);
// router.get('/emoticon', forparent.emoticon);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'heedaming' });
});

module.exports = router;