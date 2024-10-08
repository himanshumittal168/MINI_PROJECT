const User=require("../models/User");

exports.getUser=async(req,resp)=>
{
    try
    {
        const userData=await User.find();
        resp.json({
            success:true,
            message:"USER DETAILS ARE AS FOLLOWS",
            data:userData
        })
    }
    catch(err)
    {
        resp.status(400).json({
            success:false,
            message:err.message,
        })
    }
}
