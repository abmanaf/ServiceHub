import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const nagivate = useNavigate();

  const handleNavigateAboutUs = () => {
    nagivate("/About");
  };
  const handleNavigaeContact = () => {
    nagivate("/Contact");
  };

  return (
    <div>
      <div className="space-before-footer"></div>
      {/* <div className="popular-work">
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
      </div>
      <div>
        <div className="popular-work">
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
        </div>
      </div> */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="About" onClick={handleNavigateAboutUs}>
              About Us
            </Link>
            <Link to="/Service">Services </Link>
            <Link to="/Contact" onClick={handleNavigaeContact}>
              Contact
            </Link>
          </div>
          <div className="footer-social">
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="https://twitter.com/home">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HandyPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
