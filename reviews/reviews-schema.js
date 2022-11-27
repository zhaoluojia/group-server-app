import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  rating: {type: Number, enum: [1, 2, 3, 4, 5], required: true},
  comment: {type: String, required: true, default: ''},
  postedDate: {type: String, required: true},
  restaurantID: {type: String, required: true},
  customerID: {type: String, required: true},
  ownerReply: {type: String}, // not required
}, {collection: 'reviews', versionKey: false});

export default reviewSchema;