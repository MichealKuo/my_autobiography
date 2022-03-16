import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import "../Style/contact.css";
function Contact() {
  return (
    <div className="Contact-Part">
      <div className="ContactText">
        <h1>Contact</h1>
      </div>
      <div className="contact">
        <div className="Contact-left">
          <div className="ContactIcon">
            <div className="MailIcon">
              <FiMail className="icon-size " />
              <h4>Email</h4>
              <h6>sxdcfv20002000@gmail.com</h6>
              <a href="#"></a>
            </div>
            <div className="CellIcon">
              <FiPhoneCall className="icon-size " />
              <h4>Cellphone</h4>
              <h6>0988393593</h6>
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <div className="inputPart1">
            <input type="text" placeholder="Your Full Name" required />
          </div>
          <div className="inputPart2">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="inputPart3">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              required
            />
          </div>
          <div className="contactBtn">
            <button type="submit" className="contact-btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
