import mongoose from "mongoose";

const advertisementSchema = mongoose.Schema({
  restaurantID: {type: String, required: true},
  ownerID: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  poster: {type: String, required: true}, // poster of the advertisement
  postedDate: {type: Date, required: true, default: new Date()},
}, {collection: 'advertisements', versionKey: false});

export default advertisementSchema;