import mongoose from "mongoose";
import reviewsSchema from "./reviews-schema.js";

const restaurantsModel = mongoose.model('ReviewModel', reviewsSchema);
export default restaurantsModel;