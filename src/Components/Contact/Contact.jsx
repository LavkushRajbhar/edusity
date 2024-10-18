/** @format */
import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2a265327-4f0a-4510-b3a7-2d8bb548a630");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Please fill out the form below and we'll
          get back to you as soon as possible. Your feedback, questions and
          suggestions are important to us as we strive to provide exceptional
          service to our university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> contactedusity@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +91 9702258210
          </li>
          <li>
            <img src={location_icon} alt="" /> Row house:20 Bhyander
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label> Write your message here</label>
          <textarea
            name="message"
            rows="6"
            required
            placeholder="Enter your message"></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
              </form>
              <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
