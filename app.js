import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import UsersController from "./users/users-controller.js";

mongoose.connect('mongodb+srv://luojiazhao:wWvgUnODWbFEeIn7@yealp-db.iarbu28.mongodb.net/yealp');

const app = express();
app.use(cors());
app.use(express.json());
UsersController(app);
app.listen(4000);