const getReviews = (req, res) => {
  const reviews = req.db.query(
    `SELECT * FROM reviews WHERE movie_id="${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR]: Failed to get reviews | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ data, success: true });
    }
  );
};
const createReview = (req, res) => {
  res.send('createReview');
};
const updateReviewById = (req, res) => {
  res.send('updateReviewById');
};
const deleteReviewById = (req, res) => {
  const reviews = req.db.query(
    `DELETE FROM reviews WHERE movie_id="${req.params.movieId}" AND id="${req.params.reviewId}"`,
    (err) => {
      if (err) {
        console.log(`[ERROR]: Failed to delete review | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};
module.exports = {
  getReviews,
  createReview,
  updateReviewById,
  deleteReviewById,
};
