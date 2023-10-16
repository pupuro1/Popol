import React, { useState } from 'react';
import { NavLink, useLocation  } from 'react-router-dom'
import axios from 'axios';
import '../scss/detailProd.scss'

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
        </div>
    );
};

export default DetailProd;