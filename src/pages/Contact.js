import React, { useState, useRef } from "react";
import HolyCross from "../assets/HolyCross.jpg";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  // State for form fields
  const [formData, setFormData] = useState({
    from_name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); 

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5pvkf3y",
        "template_euh5x7d",
        form.current,
        "f4m182uM2j2LVay9v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setStatusType("success");
          // Clear form fields
          setFormData({
            from_name: "",
            lastName: "",
            email: "",
            message: "",
          });
          form.current.reset();
           // Remove the message after a few seconds
           setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message.");
          setStatusType("error");

          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${HolyCross})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="from_name"
            placeholder="Enter First Name..."
            type="text"
            required
            value={formData.from_name}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            placeholder="Enter Last Name..."
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email address..."
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Write a message ...."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && (
          <p className={`success-message ${statusType === "success" ? "show" : ""} ${statusType === "error" ? "error-message" : ""}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
