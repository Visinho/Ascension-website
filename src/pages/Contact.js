import React from "react";
import HolyCross from "../assets/HolyCross.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${HolyCross})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            id=""
            placeholder="Enter First Name..."
            type="text"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            id=""
            placeholder="Enter Last Name..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id=""
            placeholder="Enter email address..."
            type="text"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Write a message ...."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
