import React, { useState, useEffect, useRef } from 'react';
import hamburgerIcon from './../images/hamburgermenu.png';
import closeIcon from './../images/x_close_icon.png';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className='sidebar-container' ref={sidebarRef}>
      <button className="sidebar-button" onClick={toggleSidebar}>
        <img src={isOpen ? closeIcon : hamburgerIcon} alt="햄버거 아이콘" />
      </button>
      {isOpen && (
        <div className='nav_link'>
          {/* <Link to="/" onClick={closeSidebar}><p>홈</p></Link> */}
          <Link to="/about" onClick={closeSidebar}><p>회사소개</p></Link>
          <Link to="/Product" onClick={closeSidebar}><p>제품</p></Link>
          <Link to="/Support" onClick={closeSidebar}><p>지원</p></Link>
          <Link to="/Contact" onClick={closeSidebar}><p>문의</p></Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;