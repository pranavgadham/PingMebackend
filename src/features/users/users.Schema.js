import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    profilePhoto:{
        type:String,
    },
    password:{
        type:String,
        required: true
    }
})

export default userSchema;