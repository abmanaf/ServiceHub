import React from "react";
import "./navBar.css";
import "../footer/Footer";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        HandyPro
      </Link>
      <div className="header-right">
        <Link to="/Service" className="subnavbtn" style={{ width: "auto" }}>
          Service
        </Link>
        <Link className="active" to="/Provider">
          Join us service provider
        </Link>
        <Link to="/Signup">Sign Up</Link>

        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}

export default NavBar;
