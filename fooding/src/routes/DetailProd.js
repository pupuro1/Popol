import React, { useState } from 'react';
import { NavLink, useLocation  } from 'react-router-dom'
import axios from 'axios';
import '../scss/detailProd.scss'
import { getCookie } from '../cookie';
import { API_URL } from '../config/contansts'

const DetailProd = () => { 
    const location = useLocation();
    const { state } = location;
    console.log("state: ", state);
    console.log("state.detailProduct: ", state.detailProduct);
    
    const [number, setNumber] = useState(1);
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    const addCart = async () => {
        const userId = getCookie('login');
        const prodNum = state.detailProduct.prodNum; 
        const quantity = number;

        if(userId){ //로그인 했을때만 작동하게
            await axios.post(`${API_URL}/cart`, { userId, prodNum, quantity })
            .then(() => {
                alert("장바구니에 추가했습니다.")
            })
            .catch(err => {
                console.error(err);
            })
        }else{
            alert('로그인해주세요!');
            return;
        }
    }
    return (
        
        <div>
            <div className="product-card">
                <div id='product-container'>
    
                    <div className='product-img-box'>
                        <img className='product_img'src={state.detailProduct.imageUrl} alt="" />
                    </div>
    
                    <div className='product-contents'>
                        <h3 className='product-name'> {state.detailProduct.name}</h3>
                        <h2 className='product-price'>  <em>{state.detailProduct.price}</em> <span>원</span> </h2>
                        <p className='product-explanation'>설명: {state.detailProduct.content}</p>
                        
                        <div id="count">
                            <span>상품 개수</span>
                            <div id='counter'>
                                <div id='count-btn'> 
                                    <button onClick={decrease}>-</button> 
                                    <div><span>{number}</span></div>
                                    <button onClick={increase}>+</button>
                                </div>
                                <div id='sum'><span>원</span>  <em>{state.detailProduct.price*number}</em> <span>합계</span>  </div>
                            </div>
                        </div>
<<<<<<< HEAD
    
                        <div id="buy">
                            <button>장바구니</button>
                            <button>바로구매</button>
                        </div>
    
=======
                        <div>합계  {state.detailProduct.price*number} 원  </div>
                    </div>

                    <div id="buy">
                        <button onClick={addCart}>장바구니</button>
                        <button>바로구매</button>
>>>>>>> dc206fe9c88d8afcdb67f84d8702498c145a7668
                    </div>
                </div>
    
                <div id='back'>
                    <NavLink to='/'>뒤로</NavLink>
                </div>
    
            </div>
        </div>
    );
};

export default DetailProd;