import mongoose from "mongoose";

// User (including different roles. Use property “role” to distinguish)
const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  profilePicture: {type: String, required: true, default: "https://user-images.githubusercontent.com/15254181/203483222-a01e1942-19e4-49c8-b3e3-41dd0ce8b3de.jpg"},
  bannerPicture: {type: String, required: true, default: "https://user-images.githubusercontent.com/15254181/203613376-d7c29b41-9deb-4fce-9ebd-0c0a5f5cf44b.jpg"},
  bio: {type: String, default: ""}, // admin don't have bio
  role: {type: String, enum: ['CUSTOMER', 'ADMIN', 'OWNER'], required: true},
  location: {type: String, required: true},
  dateOfBirth: {type: Date, required: true},
  dateJoined: {type: Date, required: true, default: new Date()},
  password: {type: String, required: true},
  followersCount: {type: Number, default: 0}, // admin and owners don't have followers and people to follow
  followingCount: {type: Number, default: 0}, // admin and owners don't have followers and people to follow
}, {collection: 'users', versionKey: false});

export default userSchema