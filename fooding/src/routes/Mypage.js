import React from "react";
import axios from 'axios';
import { getCookie } from "../cookie";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";

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
    <div>
      <fieldset>
        <legend>내 정보</legend> 
        <tr>
          이름{user_name}
        </tr>
        <tr>
          <td>아이디</td>
          <td>{user_id}</td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>{user_pwd}</td>
        </tr>
        <tr>
          <td>생년월일</td>
          <td>{user_birth}</td>
        </tr>
        <tr>
          <td>전화번호</td
          ><td>{user_phone}</td>
        </tr>
      </fieldset>
    </div>
  )
}

export default Mypage;