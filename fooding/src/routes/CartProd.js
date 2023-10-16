import React from "react";
import '../scss/Cart.scss';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CartProd = ({cartProd}) => {
  const navigate = useNavigate();

  console.log("cartProd: ", cartProd);

  const deleteCart = async () => {
    await axios.delete('/cart', {
      data: {
        cartNum: cartProd.cartNum,
      }
    }).then(()=>{
      console.log('asdofadshfandsofnaodsfnoandofandojnfaskodnfkasdnkfasd');
      navigate("/cart"); //이걸로 새로고침 안됨....
    })
    .catch(e=>{
      console.error(e);
    })
  }
  
  return(
    <div class="apple1">
      <img id='img-a' src={cartProd.Product.imageUrl} alt="" />
        < div id="ap">< a href = '' > [택배배송] {cartProd.Product.name}</a></div >
        <p>6980원 {cartProd.quantity}개</p>
      <button>바로 구매</button>
      < link rel = "stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      {/* <a href="">
        <span class = "material-symbols-outlined" >close 삭제</span>
      </a> */}
      <button onClick={deleteCart}>
        <span class = "material-symbols-outlined" >close 삭제</span>
      </button>
    </div>
  )
}

export default CartProd;