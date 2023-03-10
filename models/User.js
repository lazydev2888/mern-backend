import mongoose from "mongoose";


mongoose.set('strictQuery', false);


const schema = new mongoose.Schema({
    name:String,
    photo:String,
    googleId:{
        type:String,
        required:true,
        unique: true,
    },
    role:{
        type:"String",
        enum:["admin", "user"],
        default: "user",
    },
    createdAt: {
        type:Date,
        defult:Date.now,
    },

});

export const User = mongoose.model('User', schema)