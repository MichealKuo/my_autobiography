import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import "../Style/contact.css";
function Contact() {
  return (
    <div className="Contact-Part">
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
          <input type="text" placeholder="Your Full Name" />
        </div>
        <div className="inputPart2">
          <input type="text" placeholder="Your Email" />
        </div>
        <div className="inputPart3">
          <input type="text" placeholder="Your Message" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
