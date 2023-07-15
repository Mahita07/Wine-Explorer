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
router.post("/", async(req,res)=>{
        const wineVariety = await WineModel(req.body);
        try{
            const response = await wineVariety.save();
            res.json(response);
        }
        catch(err){
            res.json(err);
        }
})
export {router as wineCollectionRouter};