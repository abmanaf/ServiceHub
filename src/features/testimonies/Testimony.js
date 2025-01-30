import React from "react";
import "./testimony.css";
import Yahya from "./HomeImages/YahyaTes.jpg";
import Faisal from "./HomeImages/FaisalTes.jpg";
import Alhaji from "./HomeImages/AlhajiTes.jpg";
import Stephen from "./HomeImages/StephenTes.jpg";

const Testimonials = () => {
  const stars = [1, 2, 3, 4, 5].map((_, i) => (
    <i key={i} className="bi bi-star-fill"></i>
  ));
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Here are some testimonials from our satisfied customers.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img src={Alhaji} className="testimonial-img" alt="Ibrahim" />
                <div className="testimonial-info">
                  <h3>Ibrahim Mohammed</h3>
                  <h4>Frontend Developer</h4>
                  <div className="stars">{stars}</div>
                </div>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Having this crew to work with was a true delight. Their
                professionalism and meticulous attention to detail are
                admirable.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img src={Stephen} className="testimonial-img" alt="Stephen" />
                <div className="testimonial-info">
                  <h3>Apam Stephen</h3>
                  <h4>Software Developer</h4>
                  <div className="stars">{stars}</div>
                </div>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                The caliber of the team's work and their commitment to it have
                truly impressed me. They went above and beyond what I had
                anticipated.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img src={Yahya} className="testimonial-img" alt="Ibrahim" />
                <div className="testimonial-info">
                  <h3>YahaYa Osman</h3>
                  <h4> Teacher</h4>
                  <div className="stars">{stars}</div>
                </div>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                The group's commitment to quality is unparalleled. Outstanding
                outcomes are continuously delivered by them.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img src={Faisal} className="testimonial-img" alt="Ibrahim" />
                <div className="testimonial-info">
                  <h3>Faisal Abdul Hamid</h3>
                  <h4> Engineer</h4>
                  <div className="stars">{stars}</div>
                </div>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>This group is
                very highly recommended by me. They delivered on schedule and
                offered first-rate assistance.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
