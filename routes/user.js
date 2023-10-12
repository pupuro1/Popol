const express = require('express');
const User = require('../models/user')


const router = express.Router();

router.route('/').post(async(req,res,next)=>{
  try {
    const user = await User.create({
      id : req.body.id,
      pwd : req.body.pwd,
      name : req.body.name,
      birth : req.body.birth,
      phone : req.body.phone,
    })
    // console.log(req.body);
    console.log("join,user",user);
    res.status(201).json("OK");
    // res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
    
  }
})

module.exports = router;