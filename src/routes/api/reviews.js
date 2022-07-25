const { Router } = require('express');
const {
  getReviews,
  createReview,
  updateReviewById,
  deleteReviewById,
} = require('../../controllers/api/reviews');

// access params from parent router make sure you use merge params = true. since http://localhost:4000/movies/:moviesId/reviews/:reviewsId params only for the reviews, since we need to access movieId from parent router
const router = Router({ mergeParams: true });

router.get('/', getReviews);
router.post('/', createReview);
router.put('/:reviewId', updateReviewById);
router.delete('/:reviewId', deleteReviewById);
module.exports = router;
