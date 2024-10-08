// name email title department role image  HIMANSHU MITTAL HM

const mongoose=require('mongoose');

const counterSchema=new mongoose.Schema({
   useridcounter:
   {
        type:Number,
        required:true,
        default:1,
   }
})

module.exports=mongoose.model("Counter",counterSchema);