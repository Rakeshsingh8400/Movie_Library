const mongoose = require('mongoose');
const MovieListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  movies: [{ type: String }],
  isPublic: { type: Boolean, default: false },
});
module.exports = mongoose.model('MovieList', MovieListSchema);
