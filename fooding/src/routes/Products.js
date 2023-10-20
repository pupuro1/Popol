/*
작성자: 김지환
수정일자: 2023-10-18
내용: 상품목록 페이지
*/
import React from "react";
import axios from 'axios';
import Product from "./Product";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import '../scss/Products.scss'
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation(); //다른 페이지에서 navigate()로 이동하면서 데이터 보내면 받기위함
  let userInfo = ''; //navigate()의 데이터 받기위한 변수
  try {
    userInfo = location.state.searchData; //userInfo변수에 navigate()로 같이온 데이터 재할당
  } catch (error) {
    console.log("전부조회"); 
  }

  console.log("userInfo: ", userInfo);

  //상품목록 조회 함수
  const getProducts = async () => {
    const endpoint = userInfo ? `/products/search?search=${userInfo}` : '/products'; //userInfo가 있다면 검색결과 조회(/products/search?search=${userInfo}) 없으면 전체조회(/products)
    try {
      const res = await axios.get(`${API_URL}${endpoint}`); //위에서 삼항연산자로 정한 endpoint로 요청
      console.log(`res(${endpoint}): `, res.data);
      return res.data;
    } catch (error) {
      console.error("API Error: ", error);
      throw error;
    }
  }
  
  const [state ] = useAsync(getProducts, [userInfo]);
  const { loading, data:products, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!products){
    return <div>로딩중입니다.</div>
  }  

  return(
    <>
      <h2>상품 목록</h2>
      <div id="products-list">
        {/*조회한 상품목롣들 map함수 써서 Product로 뿌림*/}
        {products.map(product => <Product key = {product.id} product={product} />)} 
      </div>
    </>
  )
}

export default Products;