const express=require('express');
const { createUser } = require('../controller/createUser');
const { getUser } = require('../controller/getUsers');

const router=express.Router();


router.post("/add",createUser);
router.get("/all",getUser);


module.exports=router;