var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/new', gamesCtrl.new);
router.post('/', gamesCtrl.create);
router.delete('/:id', gamesCtrl.remove);

module.exports = router;
