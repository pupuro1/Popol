import React from 'react';
import axios from 'axios';
import { setCookie } from '../cookie';
import { useNavigate } from 'react-router-dom';
import '../scss/login.scss'

const Login = () => {
  const navigate = useNavigate();
  const onLogin = async (e) => {
    e.preventDefault()
    const id = e.target.user_id.value;
    const pwd = e.target.user_pwd.value;
    // setCookie('login',id,);
    await axios.post(`/login`,{id,pwd})
    .then(()=>{
      setCookie('login',id);
      navigate('/');
      console.log('로그인 쿠키저장 완료');
    })
    .catch((error)=>{
      // console.error(error);
      console.log('전송오류입니다.');
    })
  }
  return(
    <>
      <form onSubmit={onLogin} class="Loginid">
        <h2>로그인</h2>
        <input id='user_id' type="text" placeholder='아이디'/>
        <input id='user_pwd' type="password" placeholder='비밀번호'/>
        <div>
          <label>
        <input type="checkbox" ></input>아이디 저장
          </label>
            <a href=''><li>아이디 찾기</li></a>
            <a href=''><li>비밀번호 찾기</li></a>
            <a href=''><li>회원가입</li></a>
        </div>
        <button type='submit'>로그인</button>
      </form>
    </> 
  )
}

export default Login; 