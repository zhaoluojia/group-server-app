import reviewsModel from "./reviews-model.js";

export const findAllReviewsByUserID = (oid) => reviewsModel.find({customerID: oid});
export const findReviewByRestaurantID = (rid) => reviewsModel.find({restaurantID: rid});
export const createReview = (review) => reviewsModel.create(review);
export const findAllReviews = () => reviewsModel.find();
export const deleteReviewByID = (rid) => reviewsModel.findByIdAndDelete(rid);
export const updateReviewOwnerReply = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})
export const findReviewByID = (rid) => reviewsModel.findById(rid);
