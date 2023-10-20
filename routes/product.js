const express = require('express');
const Product = require('../models/product')
const { Op } = require("sequelize");

const router = express.Router();

//전체상품조회, 삭품등록
router.route('/')
  .get(async (req,res,next)=>{ //전체 상품 조회
    try {
      const prodList = await Product.findAll({ //
        where: {
          useyn: 1, //판매여부가 1인것만
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
      const product = await Product.create({ //Product모델에 INSERT INTO
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
      const detailProd = await Product.findOne({ //Product모델에서 하나만 가져오겠다 (LIMT 1 같은거)
        where: { //가져올떄 조건
          prodNum: req.params.id, //상품코드가 선택한 상품의 코드랑 맞는거
        }
      });
      // console.log("dataValues: ", detailProd.dataValues); 
      // res.json(detailProd.dataValues);
      console.log("dataValues: ", detailProd); 
      res.json(detailProd); // 조회된 상품 json형태로 응답
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  //검색 조회
  router.route('/search')
  .get(async (req,res,next) => {
    try {
      console.log("검색내용: ", req.query);
      const searchData = await Product.findAll({ // 입력된 문자 들어있는건 전부다 조회해서 serchData에 넣기
        where: { //조건
          name: { // Op.substring로 이름 앞,끝,중간 어디든 입력된거 있으면 가져옴 (%가 앞만 있으면 앞에만) 
            [Op.substring]: `%${req.query.search}%` 
          },
        },
      });
      // console.log("searchData: ",searchData);
      res.json(searchData) //조회된거 응답
    } catch (error) {
      console.error(error);
    }
  })

  //카테고리 조회
  router.route('/:category')
  .get(async (req,res,next)=>{ 
    try {
      const detailProd = await Product.findAll({ //전부다 조회
        where: {
          kind: { // 1누르면 1-1, 1-2, 1-3들도 가져올수있게 Op.like로 뒤쪽에만 %붙임 
            [Op.like]: `${req.params.category}%`
          },
        },
      });
      // console.log("dataValues: ", detailProd.dataValues); 
      // res.json(detailProd.dataValues);
      console.log("dataValues: ", detailProd); 
      res.json(detailProd); //조회된거 응답
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

module.exports = router;