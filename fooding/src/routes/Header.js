import React, {useState}from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs"; //장바구니
import { BsFillPersonFill } from "react-icons/bs"; //my
import {NavLink} from 'react-router-dom';
import '../scss/Header.scss'


const Header = () => {
  return(
    <>
      <div className="background">
          <div className="bg-bottom"></div>
      </div>
      <div id="header">
        
        <div id="header-top">
            <NavLink to="/login">로그인</NavLink>
            <NavLink to='/join'>회원가입</NavLink>
        </div>

        <div id="header-middle">
          <NavLink to="/" id="logo">Fooding</NavLink>
          <div id="search">
            <input type="text" placeholder="검색창"></input>
            <AiOutlineSearch size={22} id="search-icon"/>
          </div>

          <ul id="header_navi">
            <li><a href=""> <BsFillPersonFill size={24} width={50} height={50} /> <span>My</span>  </a></li>
            <li><NavLink to="/cart"> <BsFillCartFill size={22} width={50} height={50}/> <span>장바구니</span> </NavLink></li>
          </ul>

        </div>

        <ul id="header-bottom">
          <li><NavLink to='/products/1'>과일</NavLink>
          {/* <li><NavLink to='/products/1' onClick={onCategory}>과일</NavLink> */}
            <div className="dropdown-menu">
              <table >
                <tbody>
                  <tr>
                    <td><NavLink>사과/배</NavLink></td>
                    <td><NavLink>감귤/만감류</NavLink></td>
                    <td><NavLink>수박/멜론</NavLink></td>
                    <td><NavLink>냉동/간편과일</NavLink></td>
                    <td><NavLink>기타과일</NavLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li><NavLink to='/products/2'>채소</NavLink>
            <div className="dropdown-menu">
              <table>
                <tr>
                  <td><NavLink>신선야채</NavLink></td>
                  <td><NavLink>냉동야채</NavLink></td>
                  <td><NavLink>건조야채</NavLink></td>
                </tr>
              </table>
            </div>
          </li>
          <li><NavLink to='/products/3'>쌀/잡곡</NavLink>
            <div className="dropdown-menu">
              <table>
                <tbody>
                  <tr>
                    <td><NavLink>국내쌀/수입쌀</NavLink></td>
                    <td><NavLink>잡곡</NavLink></td>
                    <td><NavLink>견과류</NavLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li><NavLink to='/products/4'>육류/계란류</NavLink>
          <div className="dropdown-menu">
              <table>
                <tbody>
                  <tr>
                    <td><NavLink>생고기</NavLink></td>
                    <td><NavLink>양념육</NavLink></td>
                    <td><NavLink>알류</NavLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li><NavLink to='/products/5'>수산물</NavLink>
          <div className="dropdown-menu">
              <table>
                <tbody>
                  <tr>
                    <td><NavLink>생선류</NavLink></td>
                    <td><NavLink>조개류</NavLink></td>
                    <td><NavLink>새우/해산물</NavLink></td>
                    <td><NavLink>오징어/낙지/초밥용</NavLink></td>
                  </tr>
                  {/* <tr>
                    <td><NavLink>날치알/명란알/알류</NavLink></td>
                    <td><NavLink>멸치/어포/건어물</NavLink></td>
                    <td><NavLink>미역/다시마/파래</NavLink></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </li>
        </ul>


      </div>
    </>
  )
}

export default Header;