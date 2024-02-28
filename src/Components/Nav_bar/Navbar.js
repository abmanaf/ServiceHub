import React from "react";
import "./Navbar.css";
import "../Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/Login");
  };
  const handleSignupNavigation = () => {
    navigate("/Signup");
  };
  const handleServiceProvider = () => {
    navigate("/ServiceProviderSignup");
  };
  return (
    <div className="header">
      <Link to="/" className="logo">
        HandyPro
      </Link>
      <div className="header-right">
        {/* 
        <Link to="/">Home</Link>
        */}
        <Link to="/Service" className="subnavbtn" style={{ width: "auto" }}>
          Service
        </Link>

        {/*
        <i className="fa fa-caret-down"></i>
        onClick={() =>
            (document.getElementById("id01").style.display = "block")
          }
        <div id="id01" className="modal">
          <span
            onClick={() =>
              (document.getElementById("id01").style.display = "none")
            }
            className="close"
            title="Close Modal"
          >
            &times;
          </span>
          <form className="modal-content" action="/action_page.php">
            <div className="container">
              <div className="navbar">
                <Link to="#">Plumber</Link>
                <Link to="#">Electrician</Link>
                <Link to="#">Electronics</Link>
                <Link to="#">Painter</Link>
                <Link to="#">Mason</Link>
                <Link to="#">Web developer</Link>
                <Link to="#">Home Cleaner</Link>
                <Link to="#">Login</Link>
                <Link to="#">Home</Link>
                <Link to="#">Search</Link>
                <Link to="#">Contact</Link>
                <Link to="#">Login</Link>
              </div>
              <div className="space-between-service-and-footer"></div>

              <footer className="footer">
                <div className="footer-content">
                  <div className="footer-links">
                    <Link to="#about">About Us</Link>
                    <Link to="#contact">Contact</Link>
                  </div>
                  <div className="footer-social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>&copy; 2023 HandyPro. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </form>
        </div>

        <Link
          className="active"
          to="/ServiceProviderSignup"
          onClick={() => handleServiceProvider()}
        >
        
          Join us service provider
        </Link>
         */}
        <Link
          className="active"
          to="/Provider"
          onClick={() => handleServiceProvider()}
        >
          Join us service provider
        </Link>
        <Link to="/Signup" onClick={() => handleSignupNavigation()}>
          Sign Up
        </Link>

        <Link to="/Login" onClick={() => handleLoginNavigation()}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
