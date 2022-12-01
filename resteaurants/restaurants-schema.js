import mongoose from "mongoose";

const restaurantsSchema = mongoose.Schema({
  name: {type: String, required: true},
  image_url: {type: String},
  category: {type: String, required: true},
  url: {type: String, required: true},
  price: {type: String, required: true},
  display_phone: {type: String, required: true},
  owners: {type: [String], required: true}, // could have many owners, so use array here
  reviews: {type: [String], required: true}, // array of reviewID
  yelpID: {type: String, required: true},
}, {collection: 'restaurants', versionKey: false});

export default restaurantsSchema;