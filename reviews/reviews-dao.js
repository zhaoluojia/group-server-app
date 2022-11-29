import reviewsModel from "./reviews-model.js";

export const findAllReviewsByUserID = (oid) => reviewsModel.find({customerID: oid});
export const findReviewByRestaurantID = (rid) => reviewsModel.find({restaurantID: rid});
export const findAllReviews = () => reviewsModel.find();
export const deleteReviewByID = (rid) => reviewsModel.findByIdAndDelete(rid);
