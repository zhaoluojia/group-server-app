import * as reviewsDao from './reviews-dao.js';

const findAllReviewsByUserID = async (req, res) => {
  const oid = req.params.oid;
  const reviews = await reviewsDao.findAllReviewsByUserID(oid);
  res.json(reviews);
};

const findReviewByRestaurantID =async (req, res) => {
  const rid = req.params.rid;
  const reviews = await reviewsDao.findReviewByRestaurantID(rid);
  res.json(reviews)
}

export default (app) => {
  app.get('/api/reviews/owners/:oid', findAllReviewsByUserID);
  app.get('/api/reviews/restaurant/:rid', findReviewByRestaurantID);
};

