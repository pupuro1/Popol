import React , { useState } from "react";
import '../scss/Cart.scss';
import axios from "axios";
import { API_URL } from '../config/contansts'

const CartProd = ({ cartProd }) => {
  const [number, setNumber] = useState(1);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  console.log("cartProd: ", cartProd);

  const deleteCart = async () => {
    await axios.delete(`${API_URL}/cart`, {
      data: {
        cartNum: cartProd.cartNum,
      }
    }).then(()=>{
      console.log('삭제 성공');
    })
    .catch(e=>{
      console.error(e);
    })
  }
  
  return(
    <div class="apple1">
      <img id='img-a' src={cartProd.Product.imageUrl} alt="" />
        < div id="ap">< a href = '' > [택배배송] {cartProd.Product.name}</a></div >
      <p>{cartProd.quantity * cartProd.Product.price}원 {cartProd.quantity}개</p>
       
      <button>바로 구매</button>
      < link rel = "stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <a href="/cart" onClick={deleteCart}>
        <span class = "material-symbols-outlined" >close 삭제</span>
      </a>
      {/* <div class='apple1-1'> 
            <button onClick={decrease}>-</button>
             <div><span>{number}</span></div>
            <button onClick={increase}>+</button>
        </div> */}
    </div>
  )
}

export default CartProd;