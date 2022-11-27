import reviewsModel from "./reviews-model.js";

export const findAllReviewsByUserID = (oid) => reviewsModel.find({customerID: oid});
