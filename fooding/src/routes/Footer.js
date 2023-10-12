import React from "react";
import '../scss/Footer.scss'
const Footer = () => {
  return(
    <>
    <div id="f-bg"></div>
    <div class="footert">
    <section>
    <div class="footer1">
      <ul>
        <a href="#"><span>공지사항</span></a>
        <a href="#"><span>이마트 점포안내</span></a>
        <a href="#"><span>트레이더스 점포안내</span></a>
        <a href="#"><span>신세계포인트</span></a>
      </ul>
     </div>
     </section>
     <div class="footer2">
      <div class="footer2-1">
      <a href="#"><span>회사소개</span></a>
      <a href="#"><span>개인정보처리방침</span></a>
      <a href="#"><span>이용약관</span></a>
      <a href="#"><span>청소년 보호방침</span></a>
      <a href="#"><span>지식재산권센터</span></a>
      <a href="#"><span>입점상담</span></a>
      <a href="#"><span>이마트점포 입점상담</span></a>
      <a href="#"><span>광고신청</span></a>
      <select class="obtion">
                <option>FAMILY SITE</option>
                
                <option>신세계그룹</option>
                <option>신세계포인트</option>

                <option>신세계백화점</option>
                <option>이마트</option>
                <option>이마트 트레이더스</option>
                <option>이마트에브리데이</option>
                <option>이마트24</option>
                <option>신세계TV쇼핑</option>
                <option>프리미엄 아울렛</option>
                <option>스타필드</option>
                <option>신세계세점(면동)</option>
                <option>신세계세점(부산)</option>
                <option>신세계인터내셔날</option>

                <option>신세계푸드</option>
                <option>신세계 L&B</option>
                <option>스타벅스커피코리아</option>

                <option>조선호텔앤리조트</option>

                <option>신세계건설</option>
                <option>신세계아이앤씨</option>
                
              </select>
      </div>
     </div>
     <div class="footer3">
      <h3>(주)에스에스지닷컴</h3>
      <h2>1577-3419</h2>
      <button>전화문의 전 클릭</button> 
      <button>1:1고객센터톡</button>
      <h4>고객센터/전자금융거래분쟁처리</h4>
      <ul id="bottom1">
        <li>대표자: 이인영 </li>
        <li>서울특별시 강남구 테헤란로 231  </li>
        <li>사업자등록번호: 870-88-01143   </li>
        <li>통신판매업 신고번호: 제2022-서울강남-03751호  </li>
      </ul>
      <ul id="bottom2">
        <li>개인정보보호책임자: 김우진</li>
        <li>Fax: 02-2068-7118 ssg@ssg.com</li>
        <br></br>
        <br></br>
        <br></br>
        <button>사업자 정보확인</button>
        <button>소비자분쟁해결기준</button>
      </ul>
     </div>
     </div>
     
    </>
  )
}

export default Footer;


