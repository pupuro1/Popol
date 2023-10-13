const express = require('express');
const Cart = require('../models/cart')

const router = express.Router();

router.route('/')
  .get(async (req,res,next) => {
    try {
      console.log("get성공");
    } catch (error) {
      console.error('cart라우트 get에서 에러: ',error);
      next(error);
    }
  })
  .post(async (req,res,next) => {
    try {
      console.log("cart라우트 post의 req.body: ",req.body);
      const cart = await Cart.create({
        userId: req.body.userId,
        prodNum: req.body.prodNum,
        quantity: req.body.quantity,
      });
      console.log(cart);
      res.status(201).end();
    } catch (error) {
      console.error('cart라우트 post에서 에러: ',error);
      next(error);
    }
  })

module.exports = router;