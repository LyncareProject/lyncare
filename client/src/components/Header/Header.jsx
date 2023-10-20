import './Header.css'
import Header_logo from './../images/H_Lyncarelogo.png'


const Header = ()=>{
  return(
    <div className="Header">
    <p className='H_logo'><img src={ Header_logo } alt="lyncarelogo" /></p>
      
      <nav className="gnb_nav">
      
          <a class="menu-trigger" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
     
        <ul >
          <li className="dep1"> <span>회사소개</span>
              {/* <ol className="dropdown_menu">
                <li><a href="">회사소개</a></li>  
                <li><a href="">주요연혁</a></li>  
                <li><a href="">인증현황</a></li>  
                <li><a href="">찾아오시는길</a></li>  
              </ol> */}
          </li>
          <li className="dep1"><span>제품</span>
              {/* <ol className="dropdown_menu">
                <li><a href="">차량용 에어컨필터</a></li>  
                <li><a href="">기술력 / 공정</a></li>  
                <li><a href="">우리동네 정비소</a></li>  
              </ol> */}
          </li>
          <li className="dep1"><span>지원</span>
              {/* <ol className="dropdown_menu">
                <li>차종호환표</li>  
                <li>필터교체방법</li>  
                <li>필터검색</li>  
                <li>FAQ</li>  
              </ol> */}
          </li>
          {/* <li className="dep1"><span>RECRUIT</span>
              <ol className="dropdown_menu">
                <li>기업문화</li>  
                <li>복리후생</li>  
                <li>인재상</li>  
                <li>채용안내</li>  
              </ol>
          </li> */}
          <li className="dep1"><span>문의</span>
              {/* <ol className="dropdown_menu">
                <li>문의하기</li>  
              </ol> */}
          </li>
        </ul>
        <p className='N_bg'></p>
      </nav>

       
      
    </div>
  )
}
export default Header

