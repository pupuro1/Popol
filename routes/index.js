const express = require('express');
const Product = require('../models/product')
const router = express.Router();

router.get('/',async (req,res,next)=>{
  try {
    const prodList = await Product.findAll();
    console.log(prodList);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router