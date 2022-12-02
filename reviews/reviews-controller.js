import * as reviewsDao from './reviews-dao.js';

const findAllReviewsByUserID = async (req, res) => {
  const oid = req.params.oid;
  const reviews = await reviewsDao.findAllReviewsByUserID(oid);
  res.json(reviews);
};

const findReviewByRestaurantID = async (req, res) => {
  const rid = req.params.rid;
  const reviews = await reviewsDao.findReviewByRestaurantID(rid);
  res.json(reviews)
}

const createReview = async (req, res) => {
  const newReview = req.body;
  newReview.ownerReply = '';
  const insertedReview = await reviewsDao.createReview(newReview);
  res.json(insertedReview);
};

const findAllReviews = async (req, res) => {
  const reviews = await reviewsDao.findAllReviews();
  res.json(reviews)
};

const deleteReviewByID = async (req, res) => {
  const rid = req.params.rid;
  const status = await reviewsDao.deleteReviewByID(rid);
  res.send(status);
}

const updateReviewOwnerReply = async(req, res) => {
  const reviewIdToUpdate = req.params.rid;
  const updates = req.body;
  const status = await reviewsDao.updateReviewOwnerReply(reviewIdToUpdate, updates);
  res.json(status);
}

const findReviewByID = async (req, res) => {
  const rid = req.params.rid;
  const reviews = await reviewsDao.findReviewByID(rid);
  res.json(reviews)
}

export default (app) => {
  app.get('/api/reviews', findAllReviews);
  app.get('/api/reviews/owners/:oid', findAllReviewsByUserID);
  app.get('/api/reviews/restaurant/:rid', findReviewByRestaurantID);
  app.post('/api/reviews', createReview);
  app.delete('/api/reviews/:rid', deleteReviewByID);
  app.put('/api/reviews/:rid', updateReviewOwnerReply);
  app.get('/api/reviews/:rid', findReviewByID)
};

