const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT;


// MIDDLE WARE FOR PARSE REQ BODY
app.use(express.json());
const dbConnet=require('./config/database');
app.listen(port,()=>
{
    console.log("SERVER IS ON");
})
dbConnet();


const userRouter=require("./routes/user");

app.use("/base",userRouter);



