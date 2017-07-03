var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  title: String,
  releaseYear: Number,
});

module.exports = mongoose.model('Game', gameSchema);
