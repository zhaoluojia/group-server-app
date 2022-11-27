import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
import RestaurantsController from "./resteaurants/restaurants-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import FollowsController from "./follows/follows-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
UsersController(app);
RestaurantsController(app);
ReviewsController(app);
FollowsController(app);
app.listen(process.env.PORT || 4000);
