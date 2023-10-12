import React from 'react';
import '../scss/Cart.scss';


const Cart = () => {
  return(
    <div class="jang1">
      <div>
        <h2>장바구니</h2>
      </div>
      <div class="jang2">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <span class="material-symbols-outlined">shopping_cart_checkout</span>
        <p>장바구니에 담긴 상품이 없습니다.</p>
        <button>로그인</button>
      </div>
      <div class="jang3">
        <h4>전체상품: 0개</h4>
        <dl>
          <dt><span>주문금액</span></dt>
          <dd><em>0</em><span>원</span></dd>
        </dl>
        <dl>
          <dt><span>상품할인</span></dt>
          <dd>-<em>0</em><span>원</span></dd>
          <dl>
            <dt><span>배송비</span></dt>
            <dd>+<em>0</em><span>원</span></dd>
          </dl>
        </dl>
        <div>
          <dl>
            <dt><span>결제예정금액</span></dt>
            <dd><em>0</em><span>원</span></dd>
          </dl>
          <button>주문하기</button>
          <button>선물하기</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;