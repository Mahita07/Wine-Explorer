import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js"
import {wineCollectionRouter} from "./routes/WineCollection.js";

mongoose.connect(
    "mongodb+srv://newuser1:dbpassword@cluster0.kvbh5.mongodb.net/wineapp?retryWrites=true&w=majority"
);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/wines",wineCollectionRouter);
app.listen(3001, () => console.log("Welcome to  Wine Explorer !"));