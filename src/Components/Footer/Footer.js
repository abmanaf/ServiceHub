import React from "react";
import "./Footer.css";

function Footer() {
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
            <a href="#about">About Us</a>
            <a href="#services">Services </a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/home">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 HandyPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
