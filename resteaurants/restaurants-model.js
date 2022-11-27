import mongoose from "mongoose";
import restaurantsSchema from "./restaurants-schema.js";

const restaurantsModel = mongoose.model('RestaurantModel', restaurantsSchema);
export default restaurantsModel;