import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { FcMenu, FcCancel } from "react-icons/fc";

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => {
    setMenuClick(!menuClick);
  };
  const handleCloseMenu = () => {
    setMenuClick(false);
  };
  return (
    <nav className="navbar container-fluid">
      <Link to="/home">
        <div className="logo">
          <h3>Micheal Kuo</h3>
        </div>
      </Link>
      <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/home" className="nav-link" onClick={handleCloseMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handleCloseMenu}>
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/collection" className="nav-link" onClick={handleCloseMenu}>
            Collection
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={handleCloseMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {menuClick ? <FcCancel /> : <FcMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
