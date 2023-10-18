const express = require('express');
const Cart = require('../models/cart');
const User = require('../models/user');
const Product = require('../models/product');

const router = express.Router();

router.route('/')
  .get(async (req,res,next) => {
    console.log("cart.query: ", req.query);
    try {
      const cart = await Cart.findAll({
        where: {
          userId: req.query.userId,
          result: 1,
        },
        include: [{ //조인하는부분
          model: Product,
          attributes: ['prodNum', 'name', 'price', 'imageUrl'],
        }]
      })
      
      console.log("cartProd: ", cart); 
      res.json(cart);
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
  .delete(async (req,res,next) => {
    try {
      console.log(req.body);
      await Cart.destroy({where: {cartNum: req.body.cartNum}});
      res.status(201).end();
    }catch(error) {
      console.error(error);
      next(error);
    }
  })

module.exports = router;