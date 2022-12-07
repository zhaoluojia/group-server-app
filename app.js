import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
import RestaurantsController from "./resteaurants/restaurants-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import FollowsController from "./follows/follows-controller.js";
import AdvertisementsController
  from "./advertisements/advertisements-controller.js";
import SessionController from "./session-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4
}
mongoose.connect(CONNECTION_STRING, options);

const app = express();
app.use(cors({
  credentials: true,
  // origin: 'https://chimerical-crisp-48495d.netlify.app'
  origin: 'http://localhost:3000'
}));
app.use(session({
  secret: CONNECTION_STRING,
  resave: false,
  saveUninitialized: true,
  // proxy: true,
  // name: 'GroupYealpApp',
  cookie: {
    secure: false,
    httpOnly: false,
    // sameSite: 'none'
  }
}))
app.use(express.json());
SessionController(app)
UsersController(app);
RestaurantsController(app);
ReviewsController(app);
FollowsController(app);
AdvertisementsController(app);
app.listen(process.env.PORT || 4000);
