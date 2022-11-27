import * as reviewsDao from './reviews-dao.js';

const findAllReviewsByUserID = async (req, res) => {
  const oid = req.params.oid;
  const reviews = await reviewsDao.findAllReviewsByUserID(oid);
  res.json(reviews);
};

export default (app) => {
  app.get('/api/reviews/owners/:oid', findAllReviewsByUserID);
};

