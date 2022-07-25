const { Router } = require('express');

const movies = require('./movies');
const reviews = require('./reviews');

const router = Router();

router.use('/movies', movies);
//keep it clean instead of adding in movies.js. directs to reviews controllers
router.use('/movies/:movieId/reviews', reviews);

module.exports = router;
