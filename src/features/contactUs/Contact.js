import Button from "../../Components/Button";
import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   const [isSent, setIsSent] = useState(false);
  //   const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setError("");
    // setIsSent(false);

    if (name && email && subject && message) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please fill in all fields");
    }
    setIsLoading(false);
  };

  return (
    <div id="contact" className="contact">
      <div className="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>
          Please use the contact information provided below to get in contact
          with us. We anticipate speaking with you!
        </p>
      </div>

      <div
        className="contact-container"
      >
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-grid">
              <div className="info-item" data-aos="fade" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>
                  Nii Sowah Gbovilor Street
                  <br />
                  Adenta, Ghana
                </p>
              </div>

              <div className="info-item" data-aos="fade" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>
                  +223 552 669 950
                  <br />
                  0552669950
                </p>
              </div>

              <div className="info-item" data-aos="fade" data-aos-delay="400">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>abdulmanafaliu414@gmail.com</p>
              </div>

              <div className="info-item" data-aos="fade" data-aos-delay="500">
                <i className="bi bi-clock"></i>
                <h3>Open Hours</h3>
                <p>24/7</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  value={name}
                  className="input-field"
                  placeholder="Your Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  value={email}
                  className="input-field"
                  placeholder="Your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="text"
                  value={subject}
                  className="input-field full-width"
                  placeholder="Subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                  value={message}
                  className="input-field full-width"
                  rows="6"
                  placeholder="Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="form-status">
                  {/* {isLoading && <div className="loading">Loading</div>}
                  {error && <div className="error-message">{error}</div>}
                  {isSent && <div className="sent-message">Your message has been sent. Thank you!</div>} */}

                  <Button
                    type="submit"
                    className="submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
