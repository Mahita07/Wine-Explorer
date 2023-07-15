import mongoose from 'mongoose';

const WineSchema = new mongoose.Schema({
    name:{type: String, required : true, unique: true},
    type:{type:String,required: true},
    region:{type: String, required : true},
    grapeVarities:[{type: String,}],
    description:{type:String},
    imageUrl: {type:String,required:true},
    contributer: {type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
});

export const WineModel = mongoose.model("wines",WineSchema);