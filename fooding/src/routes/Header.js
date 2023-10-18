import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs"; //장바구니
import { BsFillPersonFill } from "react-icons/bs"; //my
import {NavLink, useNavigate} from 'react-router-dom';
import { getCookie, removeCookie } from "../cookie";
import '../scss/Header.scss'


const Header = () => {
  const navigate = useNavigate();
  const user = getCookie('login');
  console.log('user Log',user);
  const Ck_Cookie = ()=>{
    if (getCookie('login')) {
      return navigate(`/mypage`)
    }else{
      return alert('로그인을 해주세요');
      //로그인 페이지로 이동
    }
  }
  const Logout = ()=>{
    removeCookie('login');
    navigate('/');
  }
  const search = async (e) => {
    e.preventDefault()
    // console.log("e.target: ", e.target.searchInput.value);
    // const searchData = await axios.get(`${API_URL}/products/search?search=${e.target.searchInput.value}`);
    // console.log("searchData: ", searchData);
    navigate('/', {
      state : {
        searchData: e.target.searchInput.value,
      },
    });
  };

  

  return(
    <>
      <div className="background">
          <div className="bg-bottom"></div>
      </div>
      <div id="header">
        {getCookie('login') == null ?
        
        <div id="header-top">
          <NavLink to='/join'>회원가입</NavLink>
          <NavLink to="/login">로그인</NavLink>
        </div>
        // 로그인 하기 전
        :
        <div id="header-top">
          <NavLink id="logout-btn" onClick={Logout}>로그아웃</NavLink>
          <NavLink id="user-name">{user}</NavLink>
        </div>
        //로그인 후
        }

        <div id="header-middle">
          <NavLink to="/" id="logo">Fooding</NavLink>
          <form id="search" onSubmit={search}>
              <input id="searchInput" type="text" placeholder="검색창"></input>
              <button id="searchBtn" type="submit"><AiOutlineSearch size={22} id="search-icon"/></button>
              {/* <AiOutlineSearch size={22} id="search-icon"/> */}
          </form>

          <ul id="header_navi">
            <li><a onClick={Ck_Cookie}> <BsFillPersonFill size={24} width={50} height={50} /> <span>My</span>  </a></li>
            <li><NavLink to="/cart"> <BsFillCartFill size={22} width={50} height={50}/> <span>장바구니</span> </NavLink></li>
          </ul>

        </div>

        <ul id="header-bottom">
          <li><NavLink to='/products/1'>과일</NavLink></li>
          <li><NavLink to='/products/2'>채소</NavLink></li>
          <li><NavLink to='/products/3'>쌀/잡곡</NavLink></li>
          <li><NavLink to='/products/4'>육류/계란류</NavLink></li>
          <li><NavLink to='/products/5'>수산물</NavLink></li>

          <div id="dropdown">
                <ul>
                    <li><a href="">사과/배</a></li>
                    <li><a href="">감귤/만감류</a></li>
                    <li><a href="">수박</a></li>
                    <li><a href="">냉동/간편과일</a></li>
                </ul>
                <ul>
                    <li><a href="">국내쌀/수입쌀</a></li>
                    <li><a href="">잡곡</a></li>
                    <li><a href="">견과류</a></li>
                </ul>
                <ul>
                    <li><a href="">신선야채</a></li>
                    <li><a href="">냉동야채</a></li>
                    <li><a href="">건조야채</a></li>
                </ul>
                <ul>
                    <li><a href="">생고기</a></li>
                    <li><a href="">양념육</a></li>
                    <li><a href="">알류</a></li>
                </ul>
                <ul>
                    <li><a href="">생선류</a></li>
                    <li><a href="">조개류</a></li>
                    <li><a href="">새우</a></li>
                    <li><a href="">오징어/낙지</a></li>
                </ul>
          </div>

        </ul>



      </div>
    </>
  )
}

export default Header;