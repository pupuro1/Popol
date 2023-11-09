/*
작성자: 김지환console
수정일자: 2023-10-18
내용: /cart로 요청 왔을때 들오는 미들웨어
*/
const express = require('express');
const Cart = require('../models/cart'); //cart모델 불러오기
const Product = require('../models/product'); //product 모델
// const User = require('../models/user'); //user모델 불러오기

const router = express.Router();

router.route('/') // 메소드 따지지 않고  /cart로 들어오면 여기 
  .get(async (req,res,next) => { // 요청이 '/cart'이고 메소드가 get일떄
    console.log("cart.query: ", req.query); 
    try {
      const cart = await Cart.findAll({ // Cart모델에서 전부(findAll) 불러와서 cart상수에 넣음
        where: { //조건
          userId: req.query.userId, //cart모델의 userId가 req.query.userID고
          result: 1, // result가 1인것만 
        },
        include: [{ //조인하는부분
          model: Product, // Product모델과 조인
          attributes: ['prodNum', 'name', 'price', 'imageUrl'], //Product모델에서 가져올 컬럼들
        }]
      })
      
      console.log("cartProd: ", cart); 
      res.json(cart); // DB조회한 결과를 json형태로 응답
    } catch (error) {
      console.error('cart라우트 get에서 에러: ',error);
      next(error);
    }
  })
  .post(async (req,res,next) => { //요청이 '/cart'이고 메소드가 post일떄
    try {
      console.log("cart라우트 post의 req.body: ",req.body);
      await Cart.create({ //Cart모델에 INSERT INTO 하겠다
        userId: req.body.userId, //userId는 req.body.userId로
        prodNum: req.body.prodNum, 
        quantity: req.body.quantity,
      });
      res.status(201).end(); //성공했다고 201상태코드 보내고 끝(.end());
    } catch (error) {
      console.error('cart라우트 post에서 에러: ',error);
      next(error);
    }
  })
  .delete(async (req,res,next) => { //요청이 '/cart'이고 메소드가 delete일떄
    try {
      console.log(req.body);  
      await Cart.destroy({ //Cart모델에서 로우 삭제하겠다
        where: { //뭐 삭제할지 조건
          cartNum: req.body.cartNum
        }
      });  
      res.status(201).end(); //삭제 성공이라고 201상태 코드 전송
    }catch(error) {
      console.error(error);
      next(error);
    }
  })

module.exports = router;