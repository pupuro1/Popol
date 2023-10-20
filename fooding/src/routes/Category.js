/*
작성자: 김지환
수정일자: 2023-10-18
내용: 카테고리 누르면 나오는 상품목록 페이지 (Products컴포넌트랑 기능 같음)
*/
import React from "react";
import axios from 'axios';
import Product from "./Product";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import {useParams} from 'react-router-dom';
import '../scss/Products.scss'

const Category = () => {
  let {category} = useParams();
  console.log("category: ",category);
  
  //누른 카테고리에 맞는 상품들 반환해주는 함수
  const getProducts = async () => {
    const res = await axios.get(`${API_URL}/products/${category}`);
    console.log('res: ',res.data);
    return res.data;
  }
  
  const [state ] = useAsync(getProducts, [category]);
  const { loading, data:products, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!products){
    console.log("state: ", state);
    console.log("products: ",products);
    return <div>로딩중입니다.</div>
  }  


  return(
    <>
      <h2>상품 목록</h2>
      <div id="products-list">
        {/*커스텀훅 사용해서 불러온 상품 목록들을 map함수 써서 Product컴포넌트로 나타넴*/}
        {products.map(product => <Product key = {product.id} product={product} />)}
      </div>
    </>
  )
}

export default Category;