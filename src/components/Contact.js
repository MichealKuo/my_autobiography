import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import "../Style/Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
// emailjs 套件
function Contact() {
  // emailjs
  const form = useRef();
  // 使用ref不需要re-render畫面 與 useState 一直更新畫面不同

  const sendEmail = (e) => {
    e.preventDefault();
    // 防止自動跳頁

    emailjs
      .sendForm(
        // email ID
        "service_cikg7gp",
        // template ID
        "template_4p70s2e",
        form.current,
        // user ID
        "4FWd7s2_GF9lTgAUA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for contact me!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="Contact-Part">
      <div className="ContactText" data-aos="fade-right">
        <h1>Contact</h1>
      </div>
      <div className="contact">
        <div className="Contact-left">
          <div className="ContactIcon">
            <div className="MailIcon" data-aos="fade-up" data-aos-delay="250">
              <FiMail className="icon-size" />
              <h4>Email</h4>
              <h6>sxdcfv20002000@gmail.com</h6>
              <a href="#"></a>
            </div>
            <div className="CellIcon" data-aos="fade-up" data-aos-delay="450">
              <FiPhoneCall className="icon-size" />
              <h4>Cellphone</h4>
              <h6>0988393593</h6>
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputPart1" data-aos="fade-up" data-aos-delay="250">
              <input
                name="name"
                type="text"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="inputPart2" data-aos="fade-up" data-aos-delay="500">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="inputPart3" data-aos="fade-up" data-aos-delay="750">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                required
              />
            </div>
            <div
              className="contactBtn"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <button type="submit" className="contact-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
