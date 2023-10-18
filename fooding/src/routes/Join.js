import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../scss/join.scss'
import { API_URL } from '../config/contansts'


const Join = () => {
  const navigate = useNavigate();
  const testSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.id.value
    const pwd = e.target.pwd.value
    const name = e.target.name.value
    const birth = e.target.birth.value
    const phone = e.target.phone.value
    if (id,pwd,name,birth,phone != "") {
      await axios.post(`${API_URL}/user`,{id, pwd, name, birth, phone})
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.error(err);
      })
    }else{
      return alert("전부 입력해주세요");
    }
  }
  return(
      <div id="join">
          <h1>회원정보</h1>
          <form id="join-form" onSubmit={testSubmit}>
            <ul>
              <li>
                  <input id="id" type="text" placeholder="아이디"/>
              </li>
              <li>
                  <input id="pwd" type="password" placeholder="비밀번호" />
              </li>
              <li>
                  <input id="name" type="text" placeholder="이름"/>
              </li>
              <li>
                  <input id="birth" type="date" defaultValue='생년월일'/>
              </li>
              <li>
                  <input id="phone" type="text" placeholder="전화번호"/>
              </li>
              <li>
                  <button id="join-btn" type="submit">회원가입</button>
              </li>
            </ul>
          </form>
      </div>


  )
}

export default Join;