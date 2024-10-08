// name email title department role image  HIMANSHU MITTAL HM

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    unq_id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("User",userSchema);