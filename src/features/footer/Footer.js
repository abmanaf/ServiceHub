import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer_section">
        <div className="sub_footer_container">
          <div className="inner_footer">
            <div className="footer_text_links">
              <h1 className="logo">
                <span>HandyPro</span>
              </h1>
              <p>
                Your one-stop shop for reliable service providers. We can
                provide any service you require, including handyman,
                electrician, plumber, and more. Using our platform, you may find
                trustworthy local specialists to help you with your needs.
              </p>
              <div className="socials_links">
                <a href="https://twitter.com" className="twitter_icon">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://facebook.com" className="facebook_icon">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" className="instagram_icon">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer_services_links">
              <h4>Our Services</h4>
              <ul>
                <li>Web Design</li>
                <li>Website Development</li>
                <li>Plumber</li>
                <li>Home Cleaner</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="footer_other_links">
              <h4>Other Links</h4>
              <div className="footer_links">
                <Link to="/Terms">Terms of service</Link>
                <Link to="/Policy">Privacy policy</Link>
              </div>
            </div>

            <div className="footer_contact">
              <h4>Contact Us</h4>
              <p>
                Nii Sowah Gbovilor Street <br />
                Adenta<br />
                Ghana <br />
                <br />
                <strong>Phone:</strong> +223 552 669 950<br />
                <strong>Email:</strong> abdul manaf aliu 414 at gmail dot com<br />
              </p>
            </div>
          </div>
        </div>
        <div className="copyright_text">
          <p>&copy; 2024 HandyPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;