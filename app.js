import express from 'express';
import cors from 'cors';
import RestaurantsController from "./resteaurants/restaurants-controller.js";
import mongoose from "mongoose";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://chuwang:7o5h1TgotOILKfEJ@yealp-db.iarbu28.mongodb.net/yealp';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.send('Group Project')});
RestaurantsController(app);
app.listen(process.env.PORT || 4000);