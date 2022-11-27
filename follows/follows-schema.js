import mongoose from "mongoose";

const followSchema = mongoose.Schema({
  followerID: {type: String, required: true},
  leaderID: {type: String, required: true},
  time: {type: Date, required: true, default: new Date()},
}, {collection: 'follows', versionKey: false});

export default followSchema;