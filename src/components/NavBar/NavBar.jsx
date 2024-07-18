import React from "react";
import "../../components/NavBar/NavBar.css";
import companylogo from "../../components/Assets/bloglogo.png";
import { IoIosSwitch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-items">
          <div className="header-logo">
            <img src={companylogo} alt="logo" />
          </div>
          <div className="header-nav-links">
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li> Single Post</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="header-search2">
            <IoIosSwitch size={25} />
            <div className="header-login">
              <button>Sign In</button>
            </div>
          </div>
          <div className="hamburgerMenu">
          <GiHamburgerMenu size={30}/>

          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
