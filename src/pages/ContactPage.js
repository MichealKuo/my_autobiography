import React from "react";
import "../Style/ContactPage.css";
import "../Style/contact.css";

import Contact from "../components/Contact";

function ContactPage() {
  return (
    <div className="ContactPage">
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default ContactPage;
