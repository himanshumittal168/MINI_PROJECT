const User=require("../models/User");
const Counter =require("../models/Counter");

exports.createUser=async(req,resp)=>
{
    try
    {
        const {name,email,title,department,role}=req.body;
        if(!name || !email || !title || !department || !role)
        {
            return resp.stats(400).json({
                success:false,
                message:'PLS ENTER ALL DETAILS'
            })
        }
        let counter=await Counter.findOne({});
        if(!counter)
        {
            console.log("HELLO");
            counter=await Counter.create({useridcounter:1});
        }
        const unq_id="SBIN"+counter.useridcounter;
        console.log(unq_id);
        const user=await User.create({
            name,
            email,
            title,
            unq_id,
            department,
            role,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        })
        counter.useridcounter+=1;
        await counter.save();
        return resp.status(200).json({
            success:true,
            message:'USER CREATED',
            data:user,
        })
    }
    catch(err)
    {
       resp.status(500).json({
        success:false,
        message:err.message,
       })
   }
}

