import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Button from "../../Components/Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          HandyPro
        </Link>
      </div>

      <Button
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </Button>

      <div className={`header-right ${isMenuOpen ? "show" : ""}`}>
        <Link to="/Service" className="nav-link" onClick={toggleMenu}>
          Service
        </Link>
        <Link to="/Provider" className="nav-link active" onClick={toggleMenu}>
          Join us service provider
        </Link>
        <Link to="/Signup" className="nav-link" onClick={toggleMenu}>
          Sign Up
        </Link>
        <Link to="/Login" className="nav-link" onClick={toggleMenu}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
