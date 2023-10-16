const express = require('express');
const Product = require('../models/product')

const router = express.Router();

router.route('/')
  .get(async (req,res,next)=>{ //전체 상품 조회
    try {
      const prodList = await Product.findAll({
        where: {
          useyn: 1,
        }
      });
      res.json(prodList);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req,res,next)=>{ //상품 등록
    try {
      console.log(req.body)
      const product = await Product.create({
        name: req.body.name,
        kind: req.body.kind,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        content: req.body.content
      })
      console.log(product);
      res.status(201).end();
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  
  //특정 제품 상세 조회
  router.route('/all/:id')
  .get(async (req,res,next)=>{
    try {
      const detailProd = await Product.findOne({
        where: {
          prodNum: req.params.id,
        }
      });
      // console.log("dataValues: ", detailProd.dataValues); 
      // res.json(detailProd.dataValues);
      console.log("dataValues: ", detailProd); 
      res.json(detailProd);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  router.route('/:category')
  .get(async (req,res,next)=>{
    try {
      const detailProd = await Product.findAll({
        where: {
          kind: req.params.category,
        }
      });
      // console.log("dataValues: ", detailProd.dataValues); 
      // res.json(detailProd.dataValues);
      console.log("dataValues: ", detailProd); 
      res.json(detailProd);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

module.exports = router;