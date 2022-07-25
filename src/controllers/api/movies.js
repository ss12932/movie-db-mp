const getMovies = (req, res) => {
  //need to establish connection to execute query.

  const movies = req.db.query('SELECT * FROM movies', (err, data) => {
    if (err) {
      console.log(`[ERROR]: Failed to get movies | ${err.message}`);
      return res.status(500).json({ success: false });
    }
    return res.json({ data, success: true });
  });
};
const getMovieById = (req, res) => {
  //need to establish connection to execute query.

  const movies = req.db.query(
    `SELECT * FROM movies WHERE id="${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR]: Failed to get movie by id | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ data, success: true });
    }
  );
};
const createMovie = (req, res) => {
  res.send('createMovie');
};
const updateMovieById = (req, res) => {
  res.send('updateMovieById');
};
const deleteMovieById = (req, res) => {
  res.send('deleteMovieById');
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
