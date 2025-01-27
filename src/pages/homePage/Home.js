import React from "react";
import "./Home.css";
import Contact from "../../features/contactUs/Contact";
import Testimonials from "../../features/testimonies/Testimony";
import PopularService from "../../features/popularServices/PopularService";
import StatsCounter from "../../features/happyStats/statsCounter/StatsCounter";
import ServicesSection from "../../features/homepageService/ServicesSection";
import SearchProvider from "../../Components/searchProvider/SearchProvider"

const Home = () => {
  return (
    <div className="contianer">
      <div className="site-details">
      <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              Welcome to <span className="highlight">HandyPro</span>
            </h2>
            <p>
              Explore our wide range of services and find the perfect
              provider for your needs. Whether you need a plumber, home
              cleaner, electrician, graphics designer, web designer, or
              website developer, we've got you covered.
            </p>
            <div className="cta-wrapper">
              <a href="#services" className="cta-button">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="icon-boxes">
        <div className="container">
          <div className="boxes-grid">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bi bi-hammer"></i>
              </div>
              <h4>Home Improvement</h4>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon">
                <i className="bi bi-brush"></i>
              </div>
              <h4>Cleaning Services</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
      <SearchProvider />
      </div>
      <ServicesSection />
      <StatsCounter />
      <PopularService />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
