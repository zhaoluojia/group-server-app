import mongoose from "mongoose";
import advertisementSchema from "./advertisements-schema.js";


const advertisementsModel = mongoose.model('advertisementModel', advertisementSchema);
export default advertisementsModel;