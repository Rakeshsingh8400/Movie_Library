// movieRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createMovieList, getUserLists, getPublicList } = require('../controllers/movieController');

router.post('/create', auth, createMovieList);
router.get('/user', auth, getUserLists);
router.get('/:id', getPublicList);

module.exports = router;