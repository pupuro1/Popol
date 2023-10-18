import React from "react";
import axios from 'axios';
import { getCookie } from "../cookie";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import '../scss/Mypage.scss';
import { BsPersonCircle } from "react-icons/bs";
const Mypage = () => {
  const user = getCookie('login');
  console.log(user);
  const getUser = async () => {
    const user_DB = await axios.get(`${API_URL}/user/mypage?user=${user}`)
    console.log('user_DB',user_DB);
    return user_DB.data;
  }
  console.log('test1');
  const [state] = useAsync(getUser, []);
  const { loading, data:products, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!products){
    return <div>로딩중입니다.</div>
  }  
  console.log(products.name);
  const user_name = products.name;
  const user_id = products.id;
  const user_pwd = products.pwd;
  const user_birth = products.birth;
  const user_phone = products.phone;
  return(
    <div id="mypage">
        <fieldset>
          <legend>내 정보</legend> 
            <ul>
              <li id="my-face-box"><BsPersonCircle id="my-face"/></li>
              <li><span>이름</span>{user_name}</li>
              <li><span>아이디</span>{user_id}</li>
              <li><span>비밀번호</span>{user_pwd}</li>
              <li><span>생년월일</span>{user_birth}</li>
              <li><span>전화번호</span>{user_phone}</li>
            </ul>
          <a href="/add_prod">상품등록하기</a>
        </fieldset>
      </div>
  )
}

export default Mypage;