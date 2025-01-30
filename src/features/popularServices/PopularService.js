import React from "react";
import service from "./popularServiceImage/images";
import "./popularService.css";
import { Link } from "react-router-dom";

const PopularService = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>Popular Services</h2>
          <p>
            Discover our comprehensive range of professional services tailored
            to meet your needs
          </p>
        </div>

        <div className="services-grid">
          {service.map((sev) => (
            <div key={sev.id} className="service-card">
              <div className="service-image">
                <img src={sev.image} alt={sev.title} />
                <div className="service-overlay">
                  <Link>Learn More</Link>
                </div>
              </div>
              <div className="service-content">
                <h3>{sev.title}</h3>
                <span className="subtitle">{sev.sub_title}</span>
                <p>{sev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularService;
