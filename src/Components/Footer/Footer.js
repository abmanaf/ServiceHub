import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const nagivate = useNavigate();

  const handleNavigateAboutUs = () => {
    nagivate("/About");
  };
  const handleNavigateTerms = () => {
    nagivate("/Terms");
  };
  const handleNavigatePolicy = () => {
    nagivate("/Policy");
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
      <footer className="footer" style={{ textAlign: "center" }}>
        <h3>Useful Links</h3>
        <div className="footer-content">
          <div className="footer-links">
            <Link to="About" onClick={handleNavigateAboutUs}>
              About Us
            </Link>
            <Link to="/Service">Service </Link>
          </div>
        </div>
      </footer>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 ">
              <a href="index.html" className="logo">
                <span>HandyPro</span>
              </a>
              <p>
                Your one-stop shop for reliable service providers. We can
                provide any service you require, including handyman,
                electrician, plumber, and more. Using our platform, you may find
                trustworthy local specialists to help you with your needs.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/home" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  className="twitter"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>Web Design</li>
                <li>Website Development</li>
                <li>Plumber</li>
                <li>Home Cleaner</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Other Links</h4>
              <ul>
                <li>
                  <Link to="/Terms" onClick={handleNavigateTerms}>
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to="/Policy" onClick={handleNavigatePolicy}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Nii Sowah Gbovilor Street <br />
                Adenta
                <br />
                Ghana <br />
                <br />
                <strong>Phone:</strong> +223 552 669 950
                <br />
                <strong>Email:</strong> abdul manaf aliu 414 at gmail dot com
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            <p>&copy; 2024 HandyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
