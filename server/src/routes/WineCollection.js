import express from 'express';
import {WineModel} from '../models/Wines.js';

const router = express.Router();
//get all wine varities 
router.get("/", async (req,res) =>{
    try{
        const response = await WineModel.find({});
        res.json(response);
    }
    catch(err){
        res.json(err);
    }
});

//post new variety of wine
router.post("/createwine", async(req,res)=>{
        const wineVariety = await WineModel(req.body);
        try{
            const response = await wineVariety.save();
            res.json(response);
        }
        catch(err){
            res.json(err);
        }
})

//saving a wine to favourites
router.put("/", async(req,res) =>{
    try{
        const wine = await WineModel(req.body.wineId);
        const user = await UserModel(req.body.userId);
        user.savedWines.push(wine);
        await user.save();
        res.json({savedWines: user.savedWines});
    }
    catch(err){
        res.json(err);
    }
})

//get saved wines' ids' 
router.get("/savedWines/ids", async(req,res) =>{
    try{
        const user = await UserModel.findById(req.body.userId);
        //return the wine id s of the wines saved by user
        res.json({savedWines:user?.savedWines})
    }
    catch(err){
        res.json(err);
    }
})

//get the saved wine documents
router.get("/savedWines/ids", async(req,res) =>{
    try{
        const user = await UserModel.findById(req.body.userId);
        const savedWines = await WineModel.find({_id: {$in:user?.savedWines},});
        res.json({savedWines})
    }
    catch(err){
        res.json(err);
    }
})
export {router as wineCollectionRouter};