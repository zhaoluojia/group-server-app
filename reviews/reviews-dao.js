import reviewsModel from "./reviews-model.js";

export const findAllReviewsByUserID = (oid) => reviewsModel.find({customerID: oid});
export const findReviewByRestaurantID = (rid) => reviewsModel.find({restaurantID: rid});
