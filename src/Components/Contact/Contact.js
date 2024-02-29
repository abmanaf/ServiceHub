import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contactingName, setContactingName] = useState("");
  const [contactingEmail, setContactingEmail] = useState("");
  const [contactingMessage, setContactingMessage] = useState("");

  const handleSendFromContactPage = (e) => {
    e.preventDefault();

    if (contactingName && contactingEmail && contactingMessage) {
      setContactingName("");
      setContactingEmail("");
      setContactingMessage("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
    console.log(
      `name: ${contactingName}, email: ${contactingEmail}, message: ${contactingMessage}`
    );
  };

  return (
    <div className="Contact-container">
      <div className="contact-image"></div>
      <div className="contact-forms">
        <form>
          <h2 className="contact">Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={contactingName}
              onChange={(e) => setContactingName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={contactingEmail}
              onChange={(e) => setContactingEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={contactingMessage}
              onChange={(e) => setContactingMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="submit-message"
            type="submit"
            onClick={handleSendFromContactPage}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
