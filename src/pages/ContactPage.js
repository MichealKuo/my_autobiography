import React from "react";
import "../Style/ContactPage.css";
import Contact from "../components/Contact";
import Navbar from "./Navbar";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navbar />
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default ContactPage;
