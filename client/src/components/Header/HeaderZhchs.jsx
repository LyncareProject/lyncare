import { Link } from "react-router-dom";
import "./Header.css";
import Header_logo from "./../images/H_Lyncarelogo.png";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/Zh-chs" className="H_logo">
        <img src={Header_logo} alt="lyncarelogo" />
      </Link>

      <nav className="gnb_nav">
        <ul>
          <li className="dep1">
            <Link to="/aboutZhchs">
              <span>公司介绍</span>
            </Link>
          </li>
          <li className="dep1">
            <Link to="/ProductZhchs">
              <span>产品</span>
            </Link>
          </li>
          <li className="dep1">
            <Link to="/SupportZhchs">
              <span>服务</span>
            </Link>
          </li>

          <li className="dep1">
            <Link to="/ContactZhchs">
              <span>咨询</span>
            </Link>
          </li>

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

        </ul>
        <p className="N_bg"></p>
      </nav>
    </div>
  );
};
export default Header;
