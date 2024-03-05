import { Link } from "react-router-dom";
import "./Header.css";
import Header_logo from "./../images/H_Lyncarelogo.png";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="H_logo">
        <img src={Header_logo} alt="lyncarelogo" />
      </Link>

      <nav className="gnb_nav">
        <ul>
          <li className="dep1">
            <Link to="/about">
              <span>회사소개</span>
            </Link>
          </li>
          <li className="dep1">
            <Link to="/Product">
              <span>제품</span>
            </Link>
          </li>
          <li className="dep1">
            <Link to="/Support">
              <span>지원</span>
            </Link>
          </li>

          <li className="dep1">
            <Link to="/Contact">
              <span>문의</span>
            </Link>
          </li>


        <li>
        <ol className="sub_nav">
          <li className="dep2">
            <Link to="/">
                <span>🇰🇷 한국어</span>
              </Link>
            </li>

          <li className="dep2">
            <Link to="/Zh-chs">
                <span>🇨🇳 華語(繁體)</span>
              </Link>
            </li>
        </ol>
        
        </li>
        
        </ul>
        <p className="N_bg"></p>
      </nav>
    </div>
  );
};
export default Header;
