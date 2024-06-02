const MovieList = require('../models/MovieList');

exports.createMovieList = async (req, res) => {
  const { name, movies, isPublic } = req.body;
  try {
    const newList = new MovieList({ user: req.user.id, name, movies, isPublic });
    const list = await newList.save();
    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserLists = async (req, res) => {
  try {
    const lists = await MovieList.find({ user: req.user.id });
    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPublicList = async (req, res) => {
  try {
    const list = await MovieList.findById(req.params.id);
    if (list.isPublic) res.json(list);
    else res.status(403).json({ msg: 'This list is private' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
