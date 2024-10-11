const express=require('express');
const { createUser } = require('../controller/createUser');
const { getUser } = require('../controller/getUsers');

const router=express.Router();


router.post("/createUser",createUser);
router.get("/getallUsers",getUser);


module.exports=router;