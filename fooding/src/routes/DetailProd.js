import React from 'react';
import { NavLink, useLocation  } from 'react-router-dom'
import axios from 'axios';
import '../scss/detailProd.scss'

const DetailProd = () => {
  const location = useLocation();
  const { state } = location;
  console.log("state: ", state);
  console.log("state.detailProduct: ", state.detailProduct);

    return (
        <>
        {/* <div className="product-card">
            <div className='product-img'>
                <img className='product_img'src={state.detailProduct.imageUrl} alt="" />
            </div>
            <div className='product-contents'>
                <h3 className='product-name'>이름: {state.detailProduct.name}</h3>
                <h2 className='product-price'>가격: {state.detailProduct.price}원</h2>
                <p className='product-content'>설명: {state.detailProduct.content}</p>
            </div>
            <NavLink to='/'>뒤로</NavLink>
        </div> */}

        <div className="product-card">
            <div id='product-container'>

                <div className='product-img-box'>
                    <img className='product_img'src={state.detailProduct.imageUrl} alt="" />
                    {/* <img className='product_img' src="aaa.png" /> */}
                </div>

                <div className='product-contents'>
                    <h3 className='product-name'>이름: {state.detailProduct.name}</h3>
                    <h2 className='product-price'>가격: {state.detailProduct.price}원</h2>
                    <p className='product-explanation'>설명: {state.detailProduct.content}</p>
                    {/* <h3 className='product-name'> 조난자 수가 불명인 산의 정상 사진</h3>
                    <h2 className='product-price'> <em>3000</em> <span>원</span></h2>
                    <p className='product-explanation'>상품설명:이 작품을 보는 자는 죽는다 예외 없음 1000만원잇으면 살수 잇슴 나나난나난나나쏴  근데 난 안죽음 왜냐하면 그냥</p> */}
                    
                    <div id="count">
                        <span>  상품 개수</span>
                        <div>- 0 +</div>
                        <div>합계  6000 원  </div>
                    </div>

                    <div id="buy">
                        <button>장바구니</button>
                        <button>바로구매</button>
                    </div>
                </div>
            </div>

            <div id='back'>
                <NavLink to='/'>뒤로</NavLink>
            </div>

        </div>
        </>
    );
};

export default DetailProd;