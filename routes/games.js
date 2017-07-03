var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/new', gamesCtrl.new);

module.exports = router;
