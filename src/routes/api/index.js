const { Router } = require('express');

const const movies = require('./movies');

const router = Router();

router.use('/movies', movies);

module.exports = router;
