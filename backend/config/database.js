const mongoose=require('mongoose');

require('dotenv');
let url=process.env.url;
const dbConnet=()=>
{
    mongoose.connect(url)
    .then(()=> console.log("DB CONNECTED"))
    .catch((err)=>{
        console.log("ERROR IN CONNECTING TO DB")
    });
};

module.exports=dbConnet;


