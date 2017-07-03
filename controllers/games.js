var Game = require('../models/game');

module.exports = {
  new: newGame,
  create: create,
  index: index
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
    res.redirect('/games/new');
  });
}

function index(req, res, next) {
  Game.find({}, function(err, games) {
    res.render('games/index', {games});
  });
}
