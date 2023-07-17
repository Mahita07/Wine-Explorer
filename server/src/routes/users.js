import express from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";


const router = express.Router();

router.post("/signup", async (req,res) =>{
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(user){
        return res.json({message: "User already exists !"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new UserModel({username, password: hashedPassword});
    await newUser.save();
    res.json({message:"User registered successfully !"});
});

router.post("/login", async (req,res) =>{
    const {username , password} = req.body;
    const user = await UserModel.findOne({username});
    console.log('Until this part ok');
    if(!user){
        res.json({message: "No user with entered credentials exists."});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
       res.json({message: "Please login with valid username and password."});
    }
    const token = jwt.sign({id: user._id}, "winetasting");
    res.json({token:token,userID:user._id});

});




export {router as userRouter};