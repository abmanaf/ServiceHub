import React from "react";
import { Link } from "react-router-dom";
import "./servicesSection.css";
import services from "./servicesData";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Greetings from our platform! To meet your demands, we provide an
            extensive array of services. View our selections below:
          </p>
        </div>

        <Link to="/Service" className="explore-link">
          Explore All <i className="bi bi-arrow-right"></i>
        </Link>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="icon">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
