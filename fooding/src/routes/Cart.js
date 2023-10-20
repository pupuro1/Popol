/*
박승균:HTML 장바구니틀 제작
작성자: 김지환
수정일자: 2023-10-18
내용: 장바구니 페이지
*/
import React from 'react';
import '../scss/Cart.scss';
import axios from 'axios';
import { getCookie } from '../cookie';
import CartProd from './CartProd';
import { useAsyncRetry } from 'react-use' // useAsyncRetry커스텀훅 사용
import { API_URL } from '../config/contansts'


const Cart = () => {
	const user = getCookie('login'); //쿠키값(id) user상수에 넣기

	//카트 목록 불러오는 함수
	const getCart = async () => {  
		const res = await axios.get(`${API_URL}/cart?userId=${user}`); // /cart경로로 userId=user 쿼리로 보내서 반환값 res상수에 넣음 
		return res.data; //res.data 리턴
	}

	const state = useAsyncRetry(getCart); // useAsyncRetry커스텀훅에 인자로 getCart함수 넣어서 반환값을 state상수에 넣음  
	const { loading, error, value: cartProds, retry } = state //state를 loading,error,cartProds,retry로 구조분해
	if (loading) return <div>로딩중..</div> //state 구조분해한 loading에 값이 true면 <div>로딩중..</div> 띄움
  if (error) return <div>Error Occured: {error.message}</div> //state 구조분해한 error에 값이 true면 <div>Error Occured: {error.message}</div> 띄움
  if (!cartProds) return <button onClick={retry}>불러오기</button> //state 구조분해한 cartProds에 값이 false면 <button onClick={retry}>불러오기</button> 띄움

	let sumPrice = 0; //장바구니 담긴 상품들 가격 합계인 sumPrice 변수 선언 
	cartProds.map(cartProd => sumPrice = sumPrice + (cartProd.quantity * cartProd.Product.price)); //상품들 map함수로 반복시켜서 sumPrice에 가격합계 재할당
	console.log("sumPrice: ", sumPrice);

  return(
    <>
			<div class="cart1">
				<div class="jang">
					<h2>장바구니</h2>
				</div>

				<div class="apple">
					<h3>택배배송 상품:{cartProds.length}개</h3>
					
					{/*
						삼항연산자 사용해서
						카트에 상품이 있으면(cartProds에 뭔가 있으면) cartProds map함수 돌려서 CartProd 컴포넌트에 props로 cartProd 넣어서 생성
						카트에 상품이 없으면(cartProds에 뭔가 없으면) 장바구니에 상품이 없습니다 표시
					*/}
					{
						cartProds != '' ?  
							cartProds.map(cartProd => <CartProd key={cartProd.cartNum} cartProd={cartProd}></CartProd>) 
							: 
							<div class="cart2">
								<div class="cart3">
									<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
									<span class="material-symbols-outlined">shopping_cart_checkout</span>
									<p>장바구니에 담긴 상품이 없습니다.</p>
								</div>
							</div>
					}
				</div>
				
			
			<div class="cart4">
		< link rel = "stylesheet"
						href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
					< span class = "material-symbols-outlined" >
						local_mall </span>
					<h4>전체상품: {cartProds.length}개</h4>
		<dl>
			<dt><span>주문금액</span></dt>
			<dd><em>{sumPrice}</em><span>원</span></dd>
		</dl>
		{/* <dl>
			<dt><span>상품할인</span></dt>
			<dd>-<em>0</em><span>원</span></dd>
			<dl>
				<dt><span>배송비</span></dt>
				<dd>+<em>0</em><span>원</span></dd>
			</dl>
		</dl> */}
		<div class="cart4-1">
			<dl>
				<dt><span>결제예정금액</span></dt>
				<dd><em>{sumPrice}</em><span>원</span></dd>
			</dl>
						<button>주문하기</button>
						<br></br>
						<button>선물하기</button>
		</div>
			</div>
				
			</div>
			
			
    </> 
  )
}


export default Cart; 