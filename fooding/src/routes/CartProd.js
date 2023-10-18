import React from "react";
import '../scss/Cart.scss';
import axios from "axios";
import { API_URL } from '../config/contansts'

const CartProd = ({cartProd}) => {

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
        < div id="ap">[택배배송] {cartProd.Product.name}</div >
        <p>{cartProd.quantity * cartProd.Product.price}원 {cartProd.quantity}개</p>
      <button>바로 구매</button>
      < link rel = "stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <a href="/cart" onClick={deleteCart}>
        <span class = "material-symbols-outlined" >close 삭제</span>
      </a>
    </div>
  )
}

export default CartProd;