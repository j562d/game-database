var Game = require('../models/game');

module.exports = {
  new: newGame,
  create: create,
  index: index,
  remove: remove
}

function newGame(req, res, next) {
  res.render('games/new');
}

function create(req, res, next) {
  var game = new Game(req.body);
  game.save(function(err) {
    // one way to handle errors
    if (err) return res.render('games/new');
    console.log(game);
    // for now, redirect right back to new.ejs
    res.redirect('/games');
  });
}

function index(req, res, next) {
  Game.find({}, function(err, games) {
    res.render('games/index', {games});
  });
}

function remove(req, res, next) {
  Game.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/games');
  });
}
