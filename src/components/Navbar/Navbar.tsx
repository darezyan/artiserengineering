import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { assets } from "../../assets/Assets";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>("Home");
  const [active, setActive] = useState<boolean>(false);

  const navBar = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Projects", path: "/about#projects" },
    { name: "Contact us", path: "#contact" },
  ];

  function handleClick(item: string) {
    setMenu(item);
    setActive(false);
  }
  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-menu">
          {navBar.map((item) => (
            <li
              key={item.name}
              onClick={() => handleClick(item.name)}
              className={menu === item.name ? "active" : ""}
            >
              {item.name === "Home" ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="responsive-navbar">
        {/* <img src={assets.logo} alt="logo" /> */}
        <div className="bars" onClick={() => toggleMenu()}>
          <FiMenu className="menu-icon" />
          <span>MENU</span>
        </div>
      </div>

      <div className={`responsive-menu ${active ? "active" : ""}`}>
        <div className="responsive-menu-header">
          <div className="responsive-close" onClick={() => toggleMenu()}>
            <MdClose />
            <span>CLOSE</span>
          </div>
        </div>
        <ul>
          {navBar.map((item) => (
            <li key={item.name} onClick={() => handleClick(item.name)}>
              {item.name === "Home" ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
        
      </div>
    </>
  );
};

export default Navbar;